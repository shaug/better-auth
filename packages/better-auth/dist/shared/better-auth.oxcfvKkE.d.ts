import { G as GenericEndpointContext, O as OAuthStatePayload } from './better-auth.DnWmi_Df.js';

/**
 * Generate OAuth state using database verification storage
 * This function can be used by custom state management implementations
 * that want to fall back to the default database-based approach
 */
declare function generateVerificationState(c: GenericEndpointContext, payload: OAuthStatePayload): Promise<string>;
declare function generateState(c: GenericEndpointContext, link?: {
    email: string;
    userId: string;
}): Promise<{
    state: string;
    codeVerifier: string;
}>;
/**
 * Parse OAuth state from database verification storage
 * This function can be used by custom state management implementations
 * that want to fall back to the default database-based approach
 */
declare function parseVerificationState(c: GenericEndpointContext, state: string): Promise<OAuthStatePayload>;
declare function parseState(c: GenericEndpointContext): Promise<{
    expiresAt: number;
    codeVerifier: string;
    callbackURL: string;
    errorURL?: string | undefined;
    newUserURL?: string | undefined;
    link?: {
        userId: string;
        email: string;
    } | undefined;
    requestSignUp?: boolean | undefined;
}>;

export { generateState as a, parseState as b, generateVerificationState as g, parseVerificationState as p };
