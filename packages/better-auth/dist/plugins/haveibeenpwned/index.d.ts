import { p as AuthContext, u as checkPassword } from '../../shared/better-auth.DnWmi_Df.js';
import '../../shared/better-auth.Bi8FQwDD.js';
import 'zod';
import 'better-call';
import 'kysely';
import 'jose';
import 'better-sqlite3';
import 'bun:sqlite';

interface HaveIBeenPwnedOptions {
    customPasswordCompromisedMessage?: string;
}
declare const haveIBeenPwned: (options?: HaveIBeenPwnedOptions) => {
    id: "haveIBeenPwned";
    init(ctx: AuthContext): {
        context: {
            password: {
                hash(password: string): Promise<string>;
                verify: (data: {
                    password: string;
                    hash: string;
                }) => Promise<boolean>;
                config: {
                    minPasswordLength: number;
                    maxPasswordLength: number;
                };
                checkPassword: typeof checkPassword;
            };
        };
    };
    $ERROR_CODES: {
        readonly PASSWORD_COMPROMISED: "The password you entered has been compromised. Please choose a different password.";
    };
};

export { haveIBeenPwned };
export type { HaveIBeenPwnedOptions };
