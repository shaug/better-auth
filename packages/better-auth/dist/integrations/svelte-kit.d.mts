import { B as BetterAuthOptions } from '../shared/better-auth.BnOObfXg.mjs';
import '../shared/better-auth.Bi8FQwDD.mjs';
import 'zod';
import 'better-call';
import 'kysely';
import 'jose';
import 'better-sqlite3';
import 'bun:sqlite';

declare const toSvelteKitHandler: (auth: {
    handler: (request: Request) => any;
    options: BetterAuthOptions;
}) => (event: {
    request: Request;
}) => any;
declare const svelteKitHandler: ({ auth, event, resolve, }: {
    auth: {
        handler: (request: Request) => any;
        options: BetterAuthOptions;
    };
    event: {
        request: Request;
        url: URL;
    };
    resolve: (event: any) => any;
}) => Promise<any>;
declare function isAuthPath(url: string, options: BetterAuthOptions): boolean;

export { isAuthPath, svelteKitHandler, toSvelteKitHandler };
