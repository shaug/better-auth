'use strict';

const zod = require('zod');
const betterCall = require('better-call');
require('@better-auth/utils/hash');
require('@noble/ciphers/chacha');
require('@noble/ciphers/utils');
require('@noble/ciphers/webcrypto');
require('@better-auth/utils/base64');
require('jose');
require('@noble/hashes/scrypt');
require('@better-auth/utils');
require('@better-auth/utils/hex');
require('@noble/hashes/utils');
const random = require('./better-auth.CYeOI8C-.cjs');

async function generateVerificationState(c, payload) {
  const identifier = random.generateRandomString(32);
  const expiresAt = new Date(payload.expiresAt);
  const verification = await c.context.internalAdapter.createVerificationValue(
    {
      value: JSON.stringify(payload),
      identifier,
      expiresAt
    },
    c
  );
  if (!verification) {
    c.context.logger.error(
      "Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database"
    );
    throw new betterCall.APIError("INTERNAL_SERVER_ERROR", {
      message: "Unable to create verification"
    });
  }
  return identifier;
}
async function generateState(c, link) {
  const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
  if (!callbackURL) {
    throw new betterCall.APIError("BAD_REQUEST", {
      message: "callbackURL is required"
    });
  }
  const codeVerifier = random.generateRandomString(128);
  const payload = {
    callbackURL,
    codeVerifier,
    errorURL: c.body?.errorCallbackURL,
    newUserURL: c.body?.newUserCallbackURL,
    link,
    /**
     * This is the actual expiry time of the state
     */
    expiresAt: Date.now() + 10 * 60 * 1e3,
    requestSignUp: c.body?.requestSignUp
  };
  let state;
  const customGenerateState = c.context.options.oauth?.stateManagement?.generateState;
  if (customGenerateState) {
    state = await customGenerateState(c, payload);
  }
  if (!state) {
    state = await generateVerificationState(c, payload);
  }
  return {
    state,
    codeVerifier: payload.codeVerifier
  };
}
async function parseVerificationState(c, state) {
  const data = await c.context.internalAdapter.findVerificationValue(state);
  if (!data) {
    c.context.logger.error("State Mismatch. Verification not found", {
      state
    });
    const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    throw c.redirect(`${errorURL}?error=please_restart_the_process`);
  }
  const parsedData = JSON.parse(data.value);
  await c.context.internalAdapter.deleteVerificationValue(data.id);
  return parsedData;
}
async function parseState(c) {
  const state = c.query.state || c.body.state;
  let data;
  const customParseState = c.context.options.oauth?.stateManagement?.parseState;
  if (customParseState) {
    data = await customParseState(c, state);
  }
  if (!data) {
    data = await parseVerificationState(c, state);
  }
  const parsedData = zod.z.object({
    callbackURL: zod.z.string(),
    codeVerifier: zod.z.string(),
    errorURL: zod.z.string().optional(),
    newUserURL: zod.z.string().optional(),
    expiresAt: zod.z.number(),
    link: zod.z.object({
      email: zod.z.string(),
      userId: zod.z.coerce.string()
    }).optional(),
    requestSignUp: zod.z.boolean().optional()
  }).parse(data);
  if (!parsedData.errorURL) {
    parsedData.errorURL = `${c.context.baseURL}/error`;
  }
  if (parsedData.expiresAt < Date.now()) {
    const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    throw c.redirect(`${errorURL}?error=please_restart_the_process`);
  }
  return parsedData;
}

exports.generateState = generateState;
exports.generateVerificationState = generateVerificationState;
exports.parseState = parseState;
exports.parseVerificationState = parseVerificationState;
