export { F as Account, a as Adapter, N as AdapterInstance, L as AdapterSchemaCreation, z as AdditionalSessionFieldsInput, D as AdditionalSessionFieldsOutput, x as AdditionalUserFieldsInput, y as AdditionalUserFieldsOutput, n as Auth, p as AuthContext, g as AuthPluginSchema, B as BetterAuthOptions, h as BetterAuthPlugin, T as FilterActions, Q as FilteredAPI, G as GenericEndpointContext, H as HookEndpointContext, Y as InferAPI, I as InferOptionSchema, i as InferPluginErrorCodes, E as InferPluginTypes, t as InferSession, X as InferSessionAPI, s as InferUser, a1 as LogHandlerParams, Z as LogLevel, a0 as Logger, M as Models, q as OAuth2Tokens, r as OAuthProvider, O as OAuthStatePayload, a4 as ProviderOptions, R as RateLimit, P as SecondaryStorage, S as Session, a5 as StateManagement, U as User, V as Verification, W as Where, v as WithJsDoc, w as betterAuth, a2 as createLogger, J as init, _ as levels, a3 as logger, $ as shouldPublishLog } from './shared/better-auth.BnOObfXg.mjs';
export { AtomListener, BetterAuthClientPlugin, ClientOptions, InferActions, InferAdditionalFromClient, InferClientAPI, InferErrorCodes, InferPluginsFromClient, InferSessionFromClient, InferUserFromClient, IsSignal, Store } from './types/index.mjs';
export { H as HIDE_METADATA } from './shared/better-auth.DEHJp1rk.mjs';
export { a as generateState, g as generateVerificationState, b as parseState, p as parseVerificationState } from './shared/better-auth.CZiEjaGi.mjs';
export * from 'better-call';
export * from 'zod';
export { D as DeepPartial, E as Expand, H as HasRequiredKeys, a as LiteralNumber, L as LiteralString, d as LiteralUnion, O as OmitId, c as PreserveJSDoc, b as Prettify, P as PrettifyDeep, R as RequiredKeysOf, S as StripEmptyObjects, U as UnionToIntersection, W as WithoutEmpty } from './shared/better-auth.Bi8FQwDD.mjs';
import 'kysely';
import 'jose';
import 'better-sqlite3';
import 'bun:sqlite';
import '@better-fetch/fetch';
import 'nanostores';

declare function capitalizeFirstLetter(str: string): string;

declare const generateId: (size?: number) => string;

declare class BetterAuthError extends Error {
    constructor(message: string, cause?: string);
}
declare class MissingDependencyError extends BetterAuthError {
    constructor(pkgName: string);
}

export { BetterAuthError, MissingDependencyError, capitalizeFirstLetter, generateId };
