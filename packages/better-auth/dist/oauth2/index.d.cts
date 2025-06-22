import { a4 as ProviderOptions, q as OAuth2Tokens } from '../shared/better-auth.D30MjlIm.cjs';
export { r as OAuthProvider, O as OAuthStatePayload, a5 as StateManagement } from '../shared/better-auth.D30MjlIm.cjs';
import * as jose from 'jose';
export { a as generateState, g as generateVerificationState, b as parseState, p as parseVerificationState } from '../shared/better-auth.-GTvY-KM.cjs';
import '../shared/better-auth.Bi8FQwDD.cjs';
import 'zod';
import 'better-call';
import 'kysely';
import 'better-sqlite3';
import 'bun:sqlite';

declare function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, prompt, accessType, responseType, display, loginHint, hd, responseMode, additionalParams, scopeJoiner, }: {
    id: string;
    options: ProviderOptions;
    redirectURI: string;
    authorizationEndpoint: string;
    state: string;
    codeVerifier?: string;
    scopes: string[];
    claims?: string[];
    duration?: string;
    prompt?: string;
    accessType?: string;
    responseType?: string;
    display?: string;
    loginHint?: string;
    hd?: string;
    responseMode?: string;
    additionalParams?: Record<string, string>;
    scopeJoiner?: string;
}): Promise<URL>;

declare function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication, deviceId, headers, }: {
    code: string;
    redirectURI: string;
    options: ProviderOptions;
    codeVerifier?: string;
    deviceId?: string;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
    headers?: Record<string, string>;
}): Promise<OAuth2Tokens>;
declare function validateToken(token: string, jwksEndpoint: string): Promise<jose.JWTVerifyResult<jose.JWTPayload>>;

declare function refreshAccessToken({ refreshToken, options, tokenEndpoint, authentication, extraParams, grantType, }: {
    refreshToken: string;
    options: ProviderOptions;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
    extraParams?: Record<string, string>;
    grantType?: string;
}): Promise<OAuth2Tokens>;

declare function generateCodeChallenge(codeVerifier: string): Promise<string>;
declare function getOAuth2Tokens(data: Record<string, any>): OAuth2Tokens;
declare const encodeOAuthParameter: (value: string) => string;

export { OAuth2Tokens, ProviderOptions, createAuthorizationURL, encodeOAuthParameter, generateCodeChallenge, getOAuth2Tokens, refreshAccessToken, validateAuthorizationCode, validateToken };
