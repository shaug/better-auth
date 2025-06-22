import { L as LiteralString, d as LiteralUnion, D as DeepPartial, U as UnionToIntersection, b as Prettify, S as StripEmptyObjects, O as OmitId, P as PrettifyDeep, E as Expand } from './better-auth.Bi8FQwDD.js';
import * as zod from 'zod';
import { ZodSchema, z } from 'zod';
import * as better_call from 'better-call';
import { EndpointContext, InputContext, CookieOptions, Endpoint, Middleware } from 'better-call';
import { Migration, PostgresPool, MysqlPool, Dialect, Kysely } from 'kysely';
import * as jose from 'jose';
import { Database } from 'better-sqlite3';
import { Database as Database$1 } from 'bun:sqlite';

declare const createInternalAdapter: (adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
    generateId: AuthContext["generateId"];
}) => {
    createOAuthUser: (user: Omit<User, "id" | "createdAt" | "updatedAt"> & Partial<User>, account: Omit<Account, "userId" | "id" | "createdAt" | "updatedAt"> & Partial<Account>, context?: GenericEndpointContext) => Promise<{
        user: any;
        account: any;
    }>;
    createUser: <T>(user: Omit<User, "id" | "createdAt" | "updatedAt" | "emailVerified"> & Partial<User> & Record<string, any>, context?: GenericEndpointContext) => Promise<T & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    }>;
    createAccount: <T>(account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account> & Record<string, any>, context?: GenericEndpointContext) => Promise<T & {
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        scope?: string | null | undefined;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }>;
    listSessions: (userId: string) => Promise<{
        id: string;
        userId: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }[]>;
    listUsers: (limit?: number, offset?: number, sortBy?: {
        field: string;
        direction: "asc" | "desc";
    }, where?: Where[]) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    }[]>;
    countTotalUsers: (where?: Where[]) => Promise<number>;
    deleteUser: (userId: string) => Promise<void>;
    createSession: (userId: string, ctx: GenericEndpointContext, dontRememberMe?: boolean, override?: Partial<Session> & Record<string, any>, overrideAll?: boolean) => Promise<{
        id: string;
        userId: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }>;
    findSession: (token: string) => Promise<{
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null>;
    findSessions: (sessionTokens: string[]) => Promise<{
        session: Session;
        user: User;
    }[]>;
    updateSession: (sessionToken: string, session: Partial<Session> & Record<string, any>, context?: GenericEndpointContext) => Promise<any>;
    deleteSession: (token: string) => Promise<void>;
    deleteAccounts: (userId: string) => Promise<void>;
    deleteAccount: (accountId: string) => Promise<void>;
    deleteSessions: (userIdOrSessionTokens: string | string[]) => Promise<void>;
    findOAuthUser: (email: string, accountId: string, providerId: string) => Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            accountId: string;
            scope?: string | null | undefined;
            password?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
        }[];
    } | null>;
    findUserByEmail: (email: string, options?: {
        includeAccounts: boolean;
    }) => Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            userId: string;
            createdAt: Date;
            updatedAt: Date;
            providerId: string;
            accountId: string;
            scope?: string | null | undefined;
            password?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
        }[];
    } | null>;
    findUserById: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    } | null>;
    linkAccount: (account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account>, context?: GenericEndpointContext) => Promise<any>;
    updateUser: (userId: string, data: Partial<User> & Record<string, any>, context?: GenericEndpointContext) => Promise<any>;
    updateUserByEmail: (email: string, data: Partial<User & Record<string, any>>, context?: GenericEndpointContext) => Promise<any>;
    updatePassword: (userId: string, password: string, context?: GenericEndpointContext) => Promise<void>;
    findAccounts: (userId: string) => Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        scope?: string | null | undefined;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }[]>;
    findAccount: (accountId: string) => Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        scope?: string | null | undefined;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    } | null>;
    findAccountByProviderId: (accountId: string, providerId: string) => Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        scope?: string | null | undefined;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    } | null>;
    findAccountByUserId: (userId: string) => Promise<{
        id: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        accountId: string;
        scope?: string | null | undefined;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
    }[]>;
    updateAccount: (id: string, data: Partial<Account>, context?: GenericEndpointContext) => Promise<any>;
    createVerificationValue: (data: Omit<Verification, "createdAt" | "id" | "updatedAt"> & Partial<Verification>, context?: GenericEndpointContext) => Promise<{
        id: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        value: string;
        identifier: string;
    }>;
    findVerificationValue: (identifier: string) => Promise<{
        id: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        value: string;
        identifier: string;
    } | null>;
    deleteVerificationValue: (id: string) => Promise<void>;
    deleteVerificationByIdentifier: (identifier: string) => Promise<void>;
    updateVerificationValue: (id: string, data: Partial<Verification>, context?: GenericEndpointContext) => Promise<any>;
};
type InternalAdapter = ReturnType<typeof createInternalAdapter>;

type FieldType = "string" | "number" | "boolean" | "date" | `${"string" | "number"}[]` | Array<LiteralString>;
type Primitive = string | number | boolean | Date | null | undefined | string[] | number[];
type FieldAttributeConfig<T extends FieldType = FieldType> = {
    /**
     * If the field should be required on a new record.
     * @default true
     */
    required?: boolean;
    /**
     * If the value should be returned on a response body.
     * @default true
     */
    returned?: boolean;
    /**
     * If a value should be provided when creating a new record.
     * @default true
     */
    input?: boolean;
    /**
     * Default value for the field
     *
     * Note: This will not create a default value on the database level. It will only
     * be used when creating a new record.
     */
    defaultValue?: Primitive | (() => Primitive);
    /**
     * transform the value before storing it.
     */
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    /**
     * Reference to another model.
     */
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    unique?: boolean;
    /**
     * If the field should be a bigint on the database instead of integer.
     */
    bigint?: boolean;
    /**
     * A zod schema to validate the value.
     */
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    /**
     * The name of the field on the database.
     */
    fieldName?: string;
    /**
     * If the field should be sortable.
     *
     * applicable only for `text` type.
     * It's useful to mark fields varchar instead of text.
     */
    sortable?: boolean;
};
type FieldAttribute<T extends FieldType = FieldType> = {
    type: T;
} & FieldAttributeConfig<T>;
declare const createFieldAttribute: <T extends FieldType, C extends Omit<FieldAttributeConfig<T>, "type">>(type: T, config?: C) => {
    bigint?: boolean;
    input?: boolean;
    required?: boolean;
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    defaultValue?: Primitive | (() => Primitive);
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    returned?: boolean;
    unique?: boolean;
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    fieldName?: string;
    sortable?: boolean;
    type: T;
};
type InferValueType<T extends FieldType> = T extends "string" ? string : T extends "number" ? number : T extends "boolean" ? boolean : T extends "date" ? Date : T extends `${infer T}[]` ? T extends "string" ? string[] : number[] : T extends Array<any> ? T[number] : never;
type InferFieldsOutput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? Field[key]["defaultValue"] extends boolean | string | number | Date ? key : never : key]: InferFieldOutput<Field[key]>;
} & {
    [key in Key as Field[key]["returned"] extends false ? never : key]?: InferFieldOutput<Field[key]> | null;
} : {};
type InferFieldsInput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : key]?: InferFieldInput<Field[key]> | undefined | null;
} : {};
/**
 * For client will add "?" on optional fields
 */
type InferFieldsInputClient<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : Field[key]["required"] extends false ? key : Field[key]["defaultValue"] extends string | number | boolean | Date ? key : never]?: InferFieldInput<Field[key]> | undefined | null;
} : {};
type InferFieldOutput<T extends FieldAttribute> = T["returned"] extends false ? never : T["required"] extends false ? InferValueType<T["type"]> | undefined | null : InferValueType<T["type"]>;
type InferFieldInput<T extends FieldAttribute> = InferValueType<T["type"]>;
type PluginFieldAttribute = Omit<FieldAttribute, "transform" | "defaultValue" | "hashValue">;
type InferFieldsFromPlugins<Options extends BetterAuthOptions, Key extends string, Format extends "output" | "input" = "output"> = Options["plugins"] extends Array<infer T> ? T extends {
    schema: {
        [key in Key]: {
            fields: infer Field;
        };
    };
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {} : {};
type InferFieldsFromOptions<Options extends BetterAuthOptions, Key extends "session" | "user", Format extends "output" | "input" = "output"> = Options[Key] extends {
    additionalFields: infer Field;
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {};

type BetterAuthDbSchema = Record<string, {
    /**
     * The name of the table in the database
     */
    modelName: string;
    /**
     * The fields of the table
     */
    fields: Record<string, FieldAttribute>;
    /**
     * Whether to disable migrations for this table
     * @default false
     */
    disableMigrations?: boolean;
    /**
     * The order of the table
     */
    order?: number;
}>;
declare const getAuthTables: (options: BetterAuthOptions) => BetterAuthDbSchema;

type KyselyDatabaseType = "postgres" | "mysql" | "sqlite" | "mssql";

declare const accountSchema: z.ZodObject<{
    id: z.ZodString;
    providerId: z.ZodString;
    accountId: z.ZodString;
    userId: z.ZodString;
    accessToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Access token expires at
     */
    accessTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * Refresh token expires at
     */
    refreshTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * The scopes that the user has authorized
     */
    scope: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Password is only stored in the credential provider
     */
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    scope?: string | null | undefined;
    password?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}, {
    id: string;
    userId: string;
    providerId: string;
    accountId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    scope?: string | null | undefined;
    password?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}>;
declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
}, {
    id: string;
    email: string;
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    emailVerified?: boolean | undefined;
    image?: string | null | undefined;
}>;
declare const sessionSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    token: z.ZodString;
    ipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAgent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}, {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}>;
declare const verificationSchema: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    expiresAt: z.ZodDate;
    identifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    value: string;
    identifier: string;
}, {
    id: string;
    expiresAt: Date;
    value: string;
    identifier: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
declare function parseOutputData<T extends Record<string, any>>(data: T, schema: {
    fields: Record<string, FieldAttribute>;
}): T;
declare function getAllFields(options: BetterAuthOptions, table: string): Record<string, FieldAttribute>;
declare function parseUserOutput(options: BetterAuthOptions, user: User): {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
};
declare function parseAccountOutput(options: BetterAuthOptions, account: Account): {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    scope?: string | null | undefined;
    password?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
};
declare function parseSessionOutput(options: BetterAuthOptions, session: Session): {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
};
declare function parseInputData<T extends Record<string, any>>(data: T, schema: {
    fields: Record<string, FieldAttribute>;
    action?: "create" | "update";
}): Partial<T>;
declare function parseUserInput(options: BetterAuthOptions, user?: Record<string, any>, action?: "create" | "update"): Partial<Record<string, any>>;
declare function parseAdditionalUserInput(options: BetterAuthOptions, user?: Record<string, any>): Partial<Record<string, any>>;
declare function parseAccountInput(options: BetterAuthOptions, account: Partial<Account>): Partial<Partial<{
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    providerId: string;
    accountId: string;
    scope?: string | null | undefined;
    password?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
}>>;
declare function parseSessionInput(options: BetterAuthOptions, session: Partial<Session>): Partial<Partial<{
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}>>;
declare function mergeSchema<S extends AuthPluginSchema>(schema: S, newSchema?: {
    [K in keyof S]?: {
        modelName?: string;
        fields?: {
            [P: string]: string;
        };
    };
}): S;

type HookEndpointContext = EndpointContext<string, any> & Omit<InputContext<string, any>, "method"> & {
    context: AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    };
    headers?: Headers;
};
type GenericEndpointContext = EndpointContext<string, any> & {
    context: AuthContext;
};

interface CookieAttributes {
    value: string;
    "max-age"?: number;
    expires?: Date;
    domain?: string;
    path?: string;
    secure?: boolean;
    httponly?: boolean;
    samesite?: "strict" | "lax" | "none";
    [key: string]: any;
}
declare function parseSetCookieHeader(setCookie: string): Map<string, CookieAttributes>;
declare function setCookieToHeader(headers: Headers): (context: {
    response: Response;
}) => void;

declare function createCookieGetter(options: BetterAuthOptions): (cookieName: string, overrideAttributes?: Partial<CookieOptions>) => {
    name: string;
    attributes: CookieOptions;
};
declare function getCookies(options: BetterAuthOptions): {
    sessionToken: {
        name: string;
        options: CookieOptions;
    };
    /**
     * This cookie is used to store the session data in the cookie
     * This is useful for when you want to cache the session in the cookie
     */
    sessionData: {
        name: string;
        options: CookieOptions;
    };
    dontRememberToken: {
        name: string;
        options: CookieOptions;
    };
};
type BetterAuthCookies = ReturnType<typeof getCookies>;
declare function setCookieCache(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}): Promise<void>;
declare function setSessionCookie(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}, dontRememberMe?: boolean, overrides?: Partial<CookieOptions>): Promise<void>;
declare function deleteSessionCookie(ctx: GenericEndpointContext, skipDontRememberMe?: boolean): void;
declare function parseCookies(cookieHeader: string): Map<string, string>;
type EligibleCookies = (string & {}) | (keyof BetterAuthCookies & {});
declare const getSessionCookie: (request: Request | Headers, config?: {
    cookiePrefix?: string;
    cookieName?: string;
    path?: string;
}) => string | null;
declare const getCookieCache: <S extends {
    session: Session & Record<string, any>;
    user: User & Record<string, any>;
}>(request: Request | Headers, config?: {
    cookiePrefix?: string;
    cookieName?: string;
    isSecure?: boolean;
    secret?: string;
}) => Promise<S | null>;

type LogLevel = "info" | "success" | "warn" | "error" | "debug";
declare const levels: readonly ["info", "success", "warn", "error", "debug"];
declare function shouldPublishLog(currentLogLevel: LogLevel, logLevel: LogLevel): boolean;
interface Logger {
    disabled?: boolean;
    level?: Exclude<LogLevel, "success">;
    log?: (level: Exclude<LogLevel, "success">, message: string, ...args: any[]) => void;
}
type LogHandlerParams = Parameters<NonNullable<Logger["log"]>> extends [
    LogLevel,
    ...infer Rest
] ? Rest : never;
declare const createLogger: (options?: Logger) => Record<LogLevel, (...params: LogHandlerParams) => void>;
declare const logger: Record<LogLevel, (message: string, ...args: any[]) => void>;

interface OAuth2Tokens {
    tokenType?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiresAt?: Date;
    refreshTokenExpiresAt?: Date;
    scopes?: string[];
    idToken?: string;
}
interface OAuthProvider<T extends Record<string, any> = Record<string, any>> {
    id: LiteralString;
    createAuthorizationURL: (data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }) => Promise<URL> | URL;
    name: string;
    validateAuthorizationCode: (data: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo: (token: OAuth2Tokens & {
        /**
         * The user object from the provider
         * This is only available for some providers like Apple
         */
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }) => Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
        };
        data: T;
    } | null>;
    /**
     * Custom function to refresh a token
     */
    refreshAccessToken?: (refreshToken: string) => Promise<OAuth2Tokens>;
    revokeToken?: (token: string) => Promise<void>;
    /**
     * Verify the id token
     * @param token - The id token
     * @param nonce - The nonce
     * @returns True if the id token is valid, false otherwise
     */
    verifyIdToken?: (token: string, nonce?: string) => Promise<boolean>;
    /**
     * Disable implicit sign up for new users. When set to true for the provider,
     * sign-in need to be called with with requestSignUp as true to create new users.
     */
    disableImplicitSignUp?: boolean;
    /**
     * Disable sign up for new users.
     */
    disableSignUp?: boolean;
    options?: ProviderOptions;
}
type ProviderOptions<Profile extends Record<string, any> = any> = {
    /**
     * The client ID of your application
     */
    clientId: string;
    /**
     * The client secret of your application
     */
    clientSecret: string;
    /**
     * The scopes you want to request from the provider
     */
    scope?: string[];
    /**
     * Remove default scopes of the provider
     */
    disableDefaultScope?: boolean;
    /**
     * The redirect URL for your application. This is where the provider will
     * redirect the user after the sign in process. Make sure this URL is
     * whitelisted in the provider's dashboard.
     */
    redirectURI?: string;
    /**
     * The client key of your application
     * Tiktok Social Provider uses this field instead of clientId
     */
    clientKey?: string;
    /**
     * Disable provider from allowing users to sign in
     * with this provider with an id token sent from the
     * client.
     */
    disableIdTokenSignIn?: boolean;
    /**
     * verifyIdToken function to verify the id token
     */
    verifyIdToken?: (token: string, nonce?: string) => Promise<boolean>;
    /**
     * Custom function to get user info from the provider
     */
    getUserInfo?: (token: OAuth2Tokens) => Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    }>;
    /**
     * Custom function to refresh a token
     */
    refreshAccessToken?: (refreshToken: string) => Promise<OAuth2Tokens>;
    /**
     * Custom function to map the provider profile to a
     * user.
     */
    mapProfileToUser?: (profile: Profile) => {
        id?: string;
        name?: string;
        email?: string | null;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    } | Promise<{
        id?: string;
        name?: string;
        email?: string | null;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    }>;
    /**
     * Disable implicit sign up for new users. When set to true for the provider,
     * sign-in need to be called with with requestSignUp as true to create new users.
     */
    disableImplicitSignUp?: boolean;
    /**
     * Disable sign up for new users.
     */
    disableSignUp?: boolean;
    /**
     * The prompt to use for the authorization code request
     */
    prompt?: "select_account" | "consent" | "login" | "none" | "select_account+consent";
    /**
     * The response mode to use for the authorization code request
     */
    responseMode?: "query" | "form_post";
    /**
     * If enabled, the user info will be overridden with the provider user info
     * This is useful if you want to use the provider user info to update the user info
     *
     * @default false
     */
    overrideUserInfoOnSignIn?: boolean;
};
/**
 * OAuth state payload structure
 */
interface OAuthStatePayload {
    /**
     * The callback URL to redirect to after OAuth completion
     */
    callbackURL: string;
    /**
     * The PKCE code verifier for OAuth 2.0 flows
     */
    codeVerifier: string;
    /**
     * The error callback URL
     */
    errorURL?: string;
    /**
     * The new user callback URL
     */
    newUserURL?: string;
    /**
     * Link account information
     */
    link?: {
        email: string;
        userId: string;
    };
    /**
     * Expiration timestamp in milliseconds
     */
    expiresAt: number;
    /**
     * Whether to request sign up
     */
    requestSignUp?: boolean;
}
/**
 * State management configuration
 *
 * Allows custom state generation and parsing strategies for OAuth flows.
 * This is useful for implementing stateless state management, cross-environment
 * OAuth flows, or other custom state handling requirements.
 *
 * @example
 * ```ts
 * // Stateless state management using encryption
 * const stateManagement: StateManagement = {
 *   generateState: async (ctx, payload) => {
 *     const encryptedState = await symmetricEncrypt({
 *       key: ctx.context.secret,
 *       data: JSON.stringify(payload)
 *     });
 *     return encodeURIComponent(encryptedState);
 *   },
 *   parseState: async (ctx, state) => {
 *     try {
 *       const decryptedState = await symmetricDecrypt({
 *         key: ctx.context.secret,
 *         data: decodeURIComponent(state)
 *       });
 *       return JSON.parse(decryptedState);
 *     } catch {
 *       return undefined; // Fallback to default behavior
 *     }
 *   }
 * };
 * ```
 *
 * @example
 * ```ts
 * // Custom state management with Redis
 * const stateManagement: StateManagement = {
 *   generateState: async (ctx, payload) => {
 *     const stateId = generateRandomString(32);
 *     await redis.setex(`oauth:state:${stateId}`, 600, JSON.stringify(payload));
 *     return stateId;
 *   },
 *   parseState: async (ctx, state) => {
 *     const data = await redis.get(`oauth:state:${state}`);
 *     if (data) {
 *       await redis.del(`oauth:state:${state}`);
 *       return JSON.parse(data);
 *     }
 *     return undefined; // Fallback to default behavior
 *   }
 * };
 * ```
 */
interface StateManagement {
    /**
     * Custom state generation function
     *
     * @param ctx - The endpoint context
     * @param payload - The OAuth state payload to encode
     * @returns A string representing the state, or undefined to fallback to
     * default behavior
     */
    generateState?: (ctx: GenericEndpointContext, payload: OAuthStatePayload) => Promise<string | undefined>;
    /**
     * Custom state parsing function
     *
     * @param ctx - The endpoint context
     * @param state - The state string to decode
     * @returns The parsed OAuth state payload, or undefined to fallback to
     * default behavior
     */
    parseState?: (ctx: GenericEndpointContext, state: string) => Promise<OAuthStatePayload | undefined>;
}

declare function checkPassword(userId: string, c: GenericEndpointContext): Promise<boolean>;

declare const init: (options: BetterAuthOptions) => Promise<AuthContext>;
type AuthContext = {
    options: BetterAuthOptions;
    appName: string;
    baseURL: string;
    trustedOrigins: string[];
    /**
     * New session that will be set after the request
     * meaning: there is a `set-cookie` header that will set
     * the session cookie. This is the fetched session. And it's set
     * by `setNewSession` method.
     */
    newSession: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    setNewSession: (session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null) => void;
    socialProviders: OAuthProvider[];
    authCookies: BetterAuthCookies;
    logger: ReturnType<typeof createLogger>;
    rateLimit: {
        enabled: boolean;
        window: number;
        max: number;
        storage: "memory" | "database" | "secondary-storage";
    } & BetterAuthOptions["rateLimit"];
    adapter: Adapter;
    internalAdapter: ReturnType<typeof createInternalAdapter>;
    createAuthCookie: ReturnType<typeof createCookieGetter>;
    secret: string;
    sessionConfig: {
        updateAge: number;
        expiresIn: number;
        freshAge: number;
    };
    generateId: (options: {
        model: LiteralUnion<Models, string>;
        size?: number;
    }) => string;
    secondaryStorage: SecondaryStorage | undefined;
    password: {
        hash: (password: string) => Promise<string>;
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
    tables: ReturnType<typeof getAuthTables>;
    runMigrations: () => Promise<void>;
};

declare const optionsMiddleware: <InputCtx extends better_call.MiddlewareInputContext<better_call.MiddlewareOptions>>(inputContext: InputCtx) => Promise<AuthContext>;
declare const createAuthMiddleware: {
    <Options extends better_call.MiddlewareOptions, R>(options: Options, handler: (ctx: better_call.MiddlewareContext<Options, AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    }>) => Promise<R>): (inputContext: better_call.MiddlewareInputContext<Options>) => Promise<R>;
    <Options extends better_call.MiddlewareOptions, R_1>(handler: (ctx: better_call.MiddlewareContext<Options, AuthContext & {
        returned?: unknown;
        responseHeaders?: Headers;
    }>) => Promise<R_1>): (inputContext: better_call.MiddlewareInputContext<Options>) => Promise<R_1>;
};
declare const createAuthEndpoint: <Path extends string, Opts extends better_call.EndpointOptions, R>(path: Path, options: Opts, handler: (ctx: better_call.EndpointContext<Path, Opts, AuthContext>) => Promise<R>) => {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<Path, Opts & {
        use: any[];
    }>> extends true ? [better_call.InferBodyInput<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["metadata"] extends {
        $Infer: {
            body: infer B;
        };
    } ? B : (Opts & {
        use: any[];
    })["body"] extends better_call.StandardSchemaV1<unknown, unknown> ? better_call.StandardSchemaV1.InferInput<(Opts & {
        use: any[];
    })["body"]> : undefined> & better_call.InferInputMethod<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["method"] extends any[] ? (Opts & {
        use: any[];
    })["method"][number] : (Opts & {
        use: any[];
    })["method"] extends "*" ? better_call.HTTPMethod : (Opts & {
        use: any[];
    })["method"] | undefined> & better_call.InferQueryInput<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["metadata"] extends {
        $Infer: {
            query: infer Query;
        };
    } ? Query : (Opts & {
        use: any[];
    })["query"] extends better_call.StandardSchemaV1<unknown, unknown> ? better_call.StandardSchemaV1.InferInput<(Opts & {
        use: any[];
    })["query"]> : Record<string, any> | undefined> & better_call.InferParamInput<Path> & better_call.InferRequestInput<Opts & {
        use: any[];
    }> & better_call.InferHeadersInput<Opts & {
        use: any[];
    }> & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }] : [((better_call.InferBodyInput<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["metadata"] extends {
        $Infer: {
            body: infer B_1;
        };
    } ? B_1 : (Opts & {
        use: any[];
    })["body"] extends better_call.StandardSchemaV1<unknown, unknown> ? better_call.StandardSchemaV1.InferInput<(Opts & {
        use: any[];
    })["body"]> : undefined> & better_call.InferInputMethod<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["method"] extends any[] ? (Opts & {
        use: any[];
    })["method"][number] : (Opts & {
        use: any[];
    })["method"] extends "*" ? better_call.HTTPMethod : (Opts & {
        use: any[];
    })["method"] | undefined> & better_call.InferQueryInput<Opts & {
        use: any[];
    }, (Opts & {
        use: any[];
    })["metadata"] extends {
        $Infer: {
            query: infer Query_1;
        };
    } ? Query_1 : (Opts & {
        use: any[];
    })["query"] extends better_call.StandardSchemaV1<unknown, unknown> ? better_call.StandardSchemaV1.InferInput<(Opts & {
        use: any[];
    })["query"]> : Record<string, any> | undefined> & better_call.InferParamInput<Path> & better_call.InferRequestInput<Opts & {
        use: any[];
    }> & better_call.InferHeadersInput<Opts & {
        use: any[];
    }> & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: R;
    } : R>;
    options: Opts & {
        use: any[];
    };
    path: Path;
};
type AuthEndpoint = ReturnType<typeof createAuthEndpoint>;
type AuthMiddleware = ReturnType<typeof createAuthMiddleware>;

type AuthPluginSchema = {
    [table in string]: {
        fields: {
            [field in string]: FieldAttribute;
        };
        disableMigration?: boolean;
        modelName?: string;
    };
};
type BetterAuthPlugin = {
    id: LiteralString;
    /**
     * The init function is called when the plugin is initialized.
     * You can return a new context or modify the existing context.
     */
    init?: (ctx: AuthContext) => {
        context?: DeepPartial<Omit<AuthContext, "options">>;
        options?: Partial<BetterAuthOptions>;
    } | void;
    endpoints?: {
        [key: string]: Endpoint;
    };
    middlewares?: {
        path: string;
        middleware: Middleware;
    }[];
    onRequest?: (request: Request, ctx: AuthContext) => Promise<{
        response: Response;
    } | {
        request: Request;
    } | void>;
    onResponse?: (response: Response, ctx: AuthContext) => Promise<{
        response: Response;
    } | void>;
    hooks?: {
        before?: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: AuthMiddleware;
        }[];
        after?: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: AuthMiddleware;
        }[];
    };
    /**
     * Schema the plugin needs
     *
     * This will also be used to migrate the database. If the fields are dynamic from the plugins
     * configuration each time the configuration is changed a new migration will be created.
     *
     * NOTE: If you want to create migrations manually using
     * migrations option or any other way you
     * can disable migration per table basis.
     *
     * @example
     * ```ts
     * schema: {
     * 	user: {
     * 		fields: {
     * 			email: {
     * 				 type: "string",
     * 			},
     * 			emailVerified: {
     * 				type: "boolean",
     * 				defaultValue: false,
     * 			},
     * 		},
     * 	}
     * } as AuthPluginSchema
     * ```
     */
    schema?: AuthPluginSchema;
    /**
     * The migrations of the plugin. If you define schema that will automatically create
     * migrations for you.
     *
     * ⚠️ Only uses this if you dont't want to use the schema option and you disabled migrations for
     * the tables.
     */
    migrations?: Record<string, Migration>;
    /**
     * The options of the plugin
     */
    options?: Record<string, any>;
    /**
     * types to be inferred
     */
    $Infer?: Record<string, any>;
    /**
     * The rate limit rules to apply to specific paths.
     */
    rateLimit?: {
        window: number;
        max: number;
        pathMatcher: (path: string) => boolean;
    }[];
    /**
     * The error codes returned by the plugin
     */
    $ERROR_CODES?: Record<string, string>;
};
type InferOptionSchema<S extends AuthPluginSchema> = S extends Record<string, {
    fields: infer Fields;
}> ? {
    [K in keyof S]?: {
        modelName?: string;
        fields?: {
            [P in keyof Fields]?: string;
        };
    };
} : never;
type InferPluginErrorCodes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$ERROR_CODES"] extends Record<string, any> ? P["$ERROR_CODES"] : {} : {}> : {};

type LoginType = 0 /** Facebook OAuth */ | 1 /** Google OAuth */ | 24 /** Apple OAuth */ | 27 /** Microsoft OAuth */ | 97 /** Mobile device */ | 98 /** RingCentral OAuth */ | 99 /** API user */ | 100 /** Zoom Work email */ | 101; /** Single Sign-On (SSO) */
type AccountStatus = "pending" | "active" | "inactive";
type PronounOption = 1 /** Ask the user every time */ | 2 /** Always display */ | 3; /** Do not display */
interface PhoneNumber {
    /** The country code of the phone number (Example: "+1") */
    code: string;
    /** The country of the phone number (Example: "US") */
    country: string;
    /** The label for the phone number (Example: "Mobile") */
    label: string;
    /** The phone number itself (Example: "800000000") */
    number: string;
    /** Whether the phone number has been verified (Example: true) */
    verified: boolean;
}
/**
 * See the full documentation below:
 * https://developers.zoom.us/docs/api/users/#tag/users/GET/users/{userId}
 */
interface ZoomProfile extends Record<string, any> {
    /** The user's account ID (Example: "q6gBJVO5TzexKYTb_I2rpg") */
    account_id: string;
    /** The user's account number (Example: 10009239) */
    account_number: number;
    /** The user's cluster (Example: "us04") */
    cluster: string;
    /** The user's CMS ID. Only enabled for Kaltura integration (Example: "KDcuGIm1QgePTO8WbOqwIQ") */
    cms_user_id: string;
    /** The user's cost center (Example: "cost center") */
    cost_center: string;
    /** User create time (Example: "2018-10-31T04:32:37Z") */
    created_at: string;
    /** Department (Example: "Developers") */
    dept: string;
    /** User's display name (Example: "Jill Chill") */
    display_name: string;
    /** User's email address (Example: "jchill@example.com") */
    email: string;
    /** User's first name (Example: "Jill") */
    first_name: string;
    /** IDs of the web groups that the user belongs to (Example: ["RSMaSp8sTEGK0_oamiA2_w"]) */
    group_ids: string[];
    /** User ID (Example: "zJKyaiAyTNC-MWjiWC18KQ") */
    id: string;
    /** IM IDs of the groups that the user belongs to (Example: ["t-_-d56CSWG-7BF15LLrOw"]) */
    im_group_ids: string[];
    /** The user's JID (Example: "jchill@example.com") */
    jid: string;
    /** The user's job title (Example: "API Developer") */
    job_title: string;
    /** Default language for the Zoom Web Portal (Example: "en-US") */
    language: string;
    /** User last login client version (Example: "5.9.6.4993(mac)") */
    last_client_version: string;
    /** User last login time (Example: "2021-05-05T20:40:30Z") */
    last_login_time: string;
    /** User's last name (Example: "Chill") */
    last_name: string;
    /** The time zone of the user (Example: "Asia/Shanghai") */
    timezone: string;
    /** User's location (Example: "Paris") */
    location: string;
    /** The user's login method (Example: 101) */
    login_types: LoginType[];
    /** User's personal meeting URL (Example: "example.com") */
    personal_meeting_url: string;
    /** This field has been deprecated and will not be supported in the future.
     * Use the phone_numbers field instead of this field.
     * The user's phone number (Example: "+1 800000000") */
    phone_number?: string;
    /** The URL for user's profile picture (Example: "example.com") */
    pic_url: string;
    /** Personal Meeting ID (PMI) (Example: 3542471135) */
    pmi: number;
    /** Unique identifier of the user's assigned role (Example: "0") */
    role_id: string;
    /** User's role name (Example: "Admin") */
    role_name: string;
    /** Status of user's account (Example: "pending") */
    status: AccountStatus;
    /** Use the personal meeting ID (PMI) for instant meetings (Example: false) */
    use_pmi: boolean;
    /** The time and date when the user was created (Example: "2018-10-31T04:32:37Z") */
    user_created_at: string;
    /** Displays whether user is verified or not (Example: 1) */
    verified: number;
    /** The user's Zoom Workplace plan option (Example: 64) */
    zoom_one_type: number;
    /** The user's company (Example: "Jill") */
    company?: string;
    /** Custom attributes that have been assigned to the user (Example: [{ "key": "cbf_cywdkexrtqc73f97gd4w6g", "name": "A1", "value": "1" }]) */
    custom_attributes?: {
        key: string;
        name: string;
        value: string;
    }[];
    /** The employee's unique ID. This field only returns when SAML single sign-on (SSO) is enabled.
     * The `login_type` value is `101` (SSO) (Example: "HqDyI037Qjili1kNsSIrIg") */
    employee_unique_id?: string;
    /** The manager for the user (Example: "thill@example.com") */
    manager?: string;
    /** The user's country for the company phone number (Example: "US")
     * @deprecated true */
    phone_country?: string;
    /** The phone number's ISO country code (Example: "+1") */
    phone_numbers?: PhoneNumber[];
    /** The user's plan type (Example: "1") */
    plan_united_type?: string;
    /** The user's pronouns (Example: "3123") */
    pronouns?: string;
    /** The user's display pronouns setting (Example: 1) */
    pronouns_option?: PronounOption;
    /** Personal meeting room URL, if the user has one (Example: "example.com") */
    vanity_url?: string;
}
interface ZoomOptions extends ProviderOptions<ZoomProfile> {
    pkce?: boolean;
}
declare const zoom: (userOptions: ZoomOptions) => {
    id: "zoom";
    name: string;
    createAuthorizationURL: ({ state, redirectURI, codeVerifier }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface VkProfile {
    user: {
        user_id: string;
        first_name: string;
        last_name: string;
        email?: string;
        phone?: number;
        avatar?: string;
        sex?: number;
        verified?: boolean;
        birthday: string;
    };
}
declare const enum LANG {
    RUS = 0,
    UKR = 1,
    ENG = 3,
    SPA = 4,
    GERMAN = 6,
    POL = 15,
    FRA = 16,
    TURKEY = 82
}
interface VkOption extends ProviderOptions {
    lang_id?: LANG;
    scheme?: "light" | "dark";
}
declare const vk: (options: VkOption) => {
    id: "vk";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI, deviceId, }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(data: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: VkOption;
};

interface RobloxProfile extends Record<string, any> {
    /** the user's id */
    sub: string;
    /** the user's username */
    preferred_username: string;
    /** the user's display name, will return the same value as the preferred_username if not set */
    nickname: string;
    /** the user's display name, again, will return the same value as the preferred_username if not set */
    name: string;
    /** the account creation date as a unix timestamp in seconds */
    created_at: number;
    /** the user's profile URL */
    profile: string;
    /** the user's avatar URL */
    picture: string;
}
interface RobloxOptions extends ProviderOptions<RobloxProfile> {
    prompt?: "none" | "consent" | "login" | "select_account" | "select_account+consent";
}
declare const roblox: (options: RobloxOptions) => {
    id: "roblox";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): URL;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: RobloxOptions;
};

interface RedditProfile {
    id: string;
    name: string;
    icon_img: string | null;
    has_verified_email: boolean;
    oauth_client_id: string;
    verified: boolean;
}
interface RedditOptions extends ProviderOptions<RedditProfile> {
    duration?: string;
}
declare const reddit: (options: RedditOptions) => {
    id: "reddit";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: RedditOptions;
};

/**
 * [More info](https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info/)
 */
interface TiktokProfile extends Record<string, any> {
    data: {
        user: {
            /**
             * The unique identification of the user in the current application.Open id
             * for the client.
             *
             * To return this field, add `fields=open_id` in the user profile request's query parameter.
             */
            open_id: string;
            /**
             * The unique identification of the user across different apps for the same developer.
             * For example, if a partner has X number of clients,
             * it will get X number of open_id for the same TikTok user,
             * but one persistent union_id for the particular user.
             *
             * To return this field, add `fields=union_id` in the user profile request's query parameter.
             */
            union_id?: string;
            /**
             * User's profile image.
             *
             * To return this field, add `fields=avatar_url` in the user profile request's query parameter.
             */
            avatar_url?: string;
            /**
             * User`s profile image in 100x100 size.
             *
             * To return this field, add `fields=avatar_url_100` in the user profile request's query parameter.
             */
            avatar_url_100?: string;
            /**
             * User's profile image with higher resolution
             *
             * To return this field, add `fields=avatar_url_100` in the user profile request's query parameter.
             */
            avatar_large_url: string;
            /**
             * User's profile name
             *
             * To return this field, add `fields=display_name` in the user profile request's query parameter.
             */
            display_name: string;
            /**
             * User's username.
             *
             * To return this field, add `fields=username` in the user profile request's query parameter.
             */
            username: string;
            /** @note Email is currently unsupported by TikTok  */
            email?: string;
            /**
             * User's bio description if there is a valid one.
             *
             * To return this field, add `fields=bio_description` in the user profile request's query parameter.
             */
            bio_description?: string;
            /**
             * The link to user's TikTok profile page.
             *
             * To return this field, add `fields=profile_deep_link` in the user profile request's query parameter.
             */
            profile_deep_link?: string;
            /**
             * Whether TikTok has provided a verified badge to the account after confirming
             * that it belongs to the user it represents.
             *
             * To return this field, add `fields=is_verified` in the user profile request's query parameter.
             */
            is_verified?: boolean;
            /**
             * User's followers count.
             *
             * To return this field, add `fields=follower_count` in the user profile request's query parameter.
             */
            follower_count?: number;
            /**
             * The number of accounts that the user is following.
             *
             * To return this field, add `fields=following_count` in the user profile request's query parameter.
             */
            following_count?: number;
            /**
             * The total number of likes received by the user across all of their videos.
             *
             * To return this field, add `fields=likes_count` in the user profile request's query parameter.
             */
            likes_count?: number;
            /**
             * The total number of publicly posted videos by the user.
             *
             * To return this field, add `fields=video_count` in the user profile request's query parameter.
             */
            video_count?: number;
        };
    };
    error?: {
        /**
         * The error category in string.
         */
        code?: string;
        /**
         * The error message in string.
         */
        message?: string;
        /**
         * The error message in string.
         */
        log_id?: string;
    };
}
interface TiktokOptions extends ProviderOptions {
}
declare const tiktok: (options: TiktokOptions) => {
    id: "tiktok";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): URL;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: TiktokOptions;
};

interface GitlabProfile extends Record<string, any> {
    id: number;
    username: string;
    email: string;
    name: string;
    state: string;
    avatar_url: string;
    web_url: string;
    created_at: string;
    bio: string;
    location?: string;
    public_email: string;
    skype: string;
    linkedin: string;
    twitter: string;
    website_url: string;
    organization: string;
    job_title: string;
    pronouns: string;
    bot: boolean;
    work_information?: string;
    followers: number;
    following: number;
    local_time: string;
    last_sign_in_at: string;
    confirmed_at: string;
    theme_id: number;
    last_activity_on: string;
    color_scheme_id: number;
    projects_limit: number;
    current_sign_in_at: string;
    identities: Array<{
        provider: string;
        extern_uid: string;
    }>;
    can_create_group: boolean;
    can_create_project: boolean;
    two_factor_enabled: boolean;
    external: boolean;
    private_profile: boolean;
    commit_email: string;
    shared_runners_minutes_limit: number;
    extra_shared_runners_minutes_limit: number;
}
interface GitlabOptions extends ProviderOptions<GitlabProfile> {
    issuer?: string;
}
declare const gitlab: (options: GitlabOptions) => {
    id: "gitlab";
    name: string;
    createAuthorizationURL: ({ state, scopes, codeVerifier, loginHint, redirectURI, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: GitlabOptions;
};

interface LinkedInProfile {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: {
        country: string;
        language: string;
    };
    email: string;
    email_verified: boolean;
}
interface LinkedInOptions extends ProviderOptions<LinkedInProfile> {
}
declare const linkedin: (options: LinkedInOptions) => {
    id: "linkedin";
    name: string;
    createAuthorizationURL: ({ state, scopes, redirectURI, loginHint, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: LinkedInOptions;
};

interface KickProfile {
    /**
     * The user id of the user
     */
    user_id: string;
    /**
     * The name of the user
     */
    name: string;
    /**
     * The email of the user
     */
    email: string;
    /**
     * The picture of the user
     */
    profile_picture: string;
}
interface KickOptions extends ProviderOptions<KickProfile> {
}
declare const kick: (options: KickOptions) => {
    id: "kick";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI, codeVerifier }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode({ code, redirectURI, codeVerifier }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }): Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: KickOptions;
};

interface DropboxProfile {
    account_id: string;
    name: {
        given_name: string;
        surname: string;
        familiar_name: string;
        display_name: string;
        abbreviated_name: string;
    };
    email: string;
    email_verified: boolean;
    profile_photo_url: string;
}
interface DropboxOptions extends ProviderOptions<DropboxProfile> {
}
declare const dropbox: (options: DropboxOptions) => {
    id: "dropbox";
    name: string;
    createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: DropboxOptions;
};

interface TwitterProfile {
    data: {
        /**
         * Unique identifier of this user. This is returned as a string in order to avoid complications with languages and tools
         * that cannot handle large integers.
         */
        id: string;
        /** The friendly name of this user, as shown on their profile. */
        name: string;
        /** The email address of this user. */
        email?: string;
        /** The Twitter handle (screen name) of this user. */
        username: string;
        /**
         * The location specified in the user's profile, if the user provided one.
         * As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
         *
         * To return this field, add `user.fields=location` in the authorization request's query parameter.
         */
        location?: string;
        /**
         * This object and its children fields contain details about text that has a special meaning in the user's description.
         *
         *To return this field, add `user.fields=entities` in the authorization request's query parameter.
         */
        entities?: {
            /** Contains details about the user's profile website. */
            url: {
                /** Contains details about the user's profile website. */
                urls: Array<{
                    /** The start position (zero-based) of the recognized user's profile website. All start indices are inclusive. */
                    start: number;
                    /** The end position (zero-based) of the recognized user's profile website. This end index is exclusive. */
                    end: number;
                    /** The URL in the format entered by the user. */
                    url: string;
                    /** The fully resolved URL. */
                    expanded_url: string;
                    /** The URL as displayed in the user's profile. */
                    display_url: string;
                }>;
            };
            /** Contains details about URLs, Hashtags, Cashtags, or mentions located within a user's description. */
            description: {
                hashtags: Array<{
                    start: number;
                    end: number;
                    tag: string;
                }>;
            };
        };
        /**
         * Indicate if this user is a verified Twitter user.
         *
         * To return this field, add `user.fields=verified` in the authorization request's query parameter.
         */
        verified?: boolean;
        /**
         * The text of this user's profile description (also known as bio), if the user provided one.
         *
         * To return this field, add `user.fields=description` in the authorization request's query parameter.
         */
        description?: string;
        /**
         * The URL specified in the user's profile, if present.
         *
         * To return this field, add `user.fields=url` in the authorization request's query parameter.
         */
        url?: string;
        /** The URL to the profile image for this user, as shown on the user's profile. */
        profile_image_url?: string;
        protected?: boolean;
        /**
         * Unique identifier of this user's pinned Tweet.
         *
         *  You can obtain the expanded object in `includes.tweets` by adding `expansions=pinned_tweet_id` in the authorization request's query parameter.
         */
        pinned_tweet_id?: string;
        created_at?: string;
    };
    includes?: {
        tweets?: Array<{
            id: string;
            text: string;
        }>;
    };
    [claims: string]: unknown;
}
interface TwitterOption extends ProviderOptions<TwitterProfile> {
}
declare const twitter: (options: TwitterOption) => {
    id: "twitter";
    name: string;
    createAuthorizationURL(data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: TwitterOption;
};

interface TwitchProfile {
    /**
     * The sub of the user
     */
    sub: string;
    /**
     * The preferred username of the user
     */
    preferred_username: string;
    /**
     * The email of the user
     */
    email: string;
    /**
     * The picture of the user
     */
    picture: string;
}
interface TwitchOptions extends ProviderOptions<TwitchProfile> {
    claims?: string[];
}
declare const twitch: (options: TwitchOptions) => {
    id: "twitch";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: TwitchOptions;
};

interface SpotifyProfile {
    id: string;
    display_name: string;
    email: string;
    images: {
        url: string;
    }[];
}
interface SpotifyOptions extends ProviderOptions<SpotifyProfile> {
}
declare const spotify: (options: SpotifyOptions) => {
    id: "spotify";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: SpotifyOptions;
};

interface HuggingFaceProfile {
    sub: string;
    name: string;
    preferred_username: string;
    profile: string;
    picture: string;
    website?: string;
    email?: string;
    email_verified?: boolean;
    isPro: boolean;
    canPay?: boolean;
    orgs?: {
        sub: string;
        name: string;
        picture: string;
        preferred_username: string;
        isEnterprise: boolean | "plus";
        canPay?: boolean;
        roleInOrg?: "admin" | "write" | "contributor" | "read";
        pendingSSO?: boolean;
        missingMFA?: boolean;
        resourceGroups?: {
            sub: string;
            name: string;
            role: "admin" | "write" | "contributor" | "read";
        }[];
    };
}
interface HuggingFaceOptions extends ProviderOptions<HuggingFaceProfile> {
}
declare const huggingface: (options: HuggingFaceOptions) => {
    id: "huggingface";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: HuggingFaceOptions;
};

interface GoogleProfile {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    /**
     * The family name of the user, or last name in most
     * Western languages.
     */
    family_name: string;
    /**
     * The given name of the user, or first name in most
     * Western languages.
     */
    given_name: string;
    hd?: string;
    iat: number;
    iss: string;
    jti?: string;
    locale?: string;
    name: string;
    nbf?: number;
    picture: string;
    sub: string;
}
interface GoogleOptions extends ProviderOptions<GoogleProfile> {
    /**
     * The access type to use for the authorization code request
     */
    accessType?: "offline" | "online";
    /**
     * The display mode to use for the authorization code request
     */
    display?: "page" | "popup" | "touch" | "wap";
    /**
     * The hosted domain of the user
     */
    hd?: string;
}
declare const google: (options: GoogleOptions) => {
    id: "google";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI, loginHint, display, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: GoogleOptions;
};

interface MicrosoftEntraIDProfile extends Record<string, any> {
    sub: string;
    name: string;
    email: string;
    picture: string;
}
interface MicrosoftOptions extends ProviderOptions<MicrosoftEntraIDProfile> {
    /**
     * The tenant ID of the Microsoft account
     * @default "common"
     */
    tenantId?: string;
    /**
     * The size of the profile photo
     * @default 48
     */
    profilePhotoSize?: 48 | 64 | 96 | 120 | 240 | 360 | 432 | 504 | 648;
    /**
     * Disable profile photo
     */
    disableProfilePhoto?: boolean;
}
declare const microsoft: (options: MicrosoftOptions) => {
    id: "microsoft";
    name: string;
    createAuthorizationURL(data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }): Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    options: MicrosoftOptions;
};

interface GithubProfile {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: string;
    public_gists: string;
    followers: string;
    following: string;
    created_at: string;
    updated_at: string;
    private_gists: string;
    total_private_repos: string;
    owned_private_repos: string;
    disk_usage: string;
    collaborators: string;
    two_factor_authentication: boolean;
    plan: {
        name: string;
        space: string;
        private_repos: string;
        collaborators: string;
    };
}
interface GithubOptions extends ProviderOptions<GithubProfile> {
}
declare const github: (options: GithubOptions) => {
    id: "github";
    name: string;
    createAuthorizationURL({ state, scopes, loginHint, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: GithubOptions;
};

interface FacebookProfile {
    id: string;
    name: string;
    email: string;
    email_verified: boolean;
    picture: {
        data: {
            height: number;
            is_silhouette: boolean;
            url: string;
            width: number;
        };
    };
}
interface FacebookOptions extends ProviderOptions<FacebookProfile> {
    /**
     * Extend list of fields to retrieve from the Facebook user profile.
     *
     * @default ["id", "name", "email", "picture"]
     */
    fields?: string[];
    /**
     * The config id to use when undergoing oauth
     */
    configId?: string;
}
declare const facebook: (options: FacebookOptions) => {
    id: "facebook";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI, loginHint }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: FacebookOptions;
};

interface DiscordProfile extends Record<string, any> {
    /** the user's id (i.e. the numerical snowflake) */
    id: string;
    /** the user's username, not unique across the platform */
    username: string;
    /** the user's Discord-tag */
    discriminator: string;
    /** the user's display name, if it is set  */
    global_name: string | null;
    /**
     * the user's avatar hash:
     * https://discord.com/developers/docs/reference#image-formatting
     */
    avatar: string | null;
    /** whether the user belongs to an OAuth2 application */
    bot?: boolean;
    /**
     * whether the user is an Official Discord System user (part of the urgent
     * message system)
     */
    system?: boolean;
    /** whether the user has two factor enabled on their account */
    mfa_enabled: boolean;
    /**
     * the user's banner hash:
     * https://discord.com/developers/docs/reference#image-formatting
     */
    banner: string | null;
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    accent_color: number | null;
    /**
     * the user's chosen language option:
     * https://discord.com/developers/docs/reference#locales
     */
    locale: string;
    /** whether the email on this account has been verified */
    verified: boolean;
    /** the user's email */
    email: string;
    /**
     * the flags on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    flags: number;
    /**
     * the type of Nitro subscription on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-premium-types
     */
    premium_type: number;
    /**
     * the public flags on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    public_flags: number;
    /** undocumented field; corresponds to the user's custom nickname */
    display_name: string | null;
    /**
     * undocumented field; corresponds to the Discord feature where you can e.g.
     * put your avatar inside of an ice cube
     */
    avatar_decoration: string | null;
    /**
     * undocumented field; corresponds to the premium feature where you can
     * select a custom banner color
     */
    banner_color: string | null;
    /** undocumented field; the CDN URL of their profile picture */
    image_url: string;
}
interface DiscordOptions extends ProviderOptions<DiscordProfile> {
    prompt?: "none" | "consent";
}
declare const discord: (options: DiscordOptions) => {
    id: "discord";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): URL;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: DiscordOptions;
};

interface AppleProfile {
    /**
     * The subject registered claim identifies the principal that’s the subject
     * of the identity token. Because this token is for your app, the value is
     * the unique identifier for the user.
     */
    sub: string;
    /**
     * A String value representing the user's email address.
     * The email address is either the user's real email address or the proxy
     * address, depending on their status private email relay service.
     */
    email: string;
    /**
     * A string or Boolean value that indicates whether the service verifies
     * the email. The value can either be a string ("true" or "false") or a
     * Boolean (true or false). The system may not verify email addresses for
     * Sign in with Apple at Work & School users, and this claim is "false" or
     * false for those users.
     */
    email_verified: true | "true";
    /**
     * A string or Boolean value that indicates whether the email that the user
     * shares is the proxy address. The value can either be a string ("true" or
     * "false") or a Boolean (true or false).
     */
    is_private_email: boolean;
    /**
     * An Integer value that indicates whether the user appears to be a real
     * person. Use the value of this claim to mitigate fraud. The possible
     * values are: 0 (or Unsupported), 1 (or Unknown), 2 (or LikelyReal). For
     * more information, see ASUserDetectionStatus. This claim is present only
     * in iOS 14 and later, macOS 11 and later, watchOS 7 and later, tvOS 14
     * and later. The claim isn’t present or supported for web-based apps.
     */
    real_user_status: number;
    /**
     * The user’s full name in the format provided during the authorization
     * process.
     */
    name: string;
    /**
     * The URL to the user's profile picture.
     */
    picture: string;
    user?: AppleNonConformUser;
}
/**
 * This is the shape of the `user` query parameter that Apple sends the first
 * time the user consents to the app.
 * @see https://developer.apple.com/documentation/signinwithapplerestapi/request-an-authorization-to-the-sign-in-with-apple-server./
 */
interface AppleNonConformUser {
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
}
interface AppleOptions extends ProviderOptions<AppleProfile> {
    appBundleIdentifier?: string;
}
declare const apple: (options: AppleOptions) => {
    id: "apple";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
        display?: string;
        loginHint?: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
        deviceId?: string;
    }) => Promise<OAuth2Tokens>;
    verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
    refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens & {
        user?: {
            name?: {
                firstName?: string;
                lastName?: string;
            };
            email?: string;
        };
    }): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
    options: AppleOptions;
};
declare const getApplePublicKey: (kid: string) => Promise<Uint8Array<ArrayBufferLike> | jose.KeyLike>;

declare const socialProviders: {
    apple: (options: AppleOptions) => {
        id: "apple";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: AppleOptions;
    };
    discord: (options: DiscordOptions) => {
        id: "discord";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): URL;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: DiscordOptions;
    };
    facebook: (options: FacebookOptions) => {
        id: "facebook";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI, loginHint }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: FacebookOptions;
    };
    github: (options: GithubOptions) => {
        id: "github";
        name: string;
        createAuthorizationURL({ state, scopes, loginHint, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: GithubOptions;
    };
    microsoft: (options: MicrosoftOptions) => {
        id: "microsoft";
        name: string;
        createAuthorizationURL(data: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }): Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        options: MicrosoftOptions;
    };
    google: (options: GoogleOptions) => {
        id: "google";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI, loginHint, display, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: GoogleOptions;
    };
    huggingface: (options: HuggingFaceOptions) => {
        id: "huggingface";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: HuggingFaceOptions;
    };
    spotify: (options: SpotifyOptions) => {
        id: "spotify";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: SpotifyOptions;
    };
    twitch: (options: TwitchOptions) => {
        id: "twitch";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: TwitchOptions;
    };
    twitter: (options: TwitterOption) => {
        id: "twitter";
        name: string;
        createAuthorizationURL(data: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: TwitterOption;
    };
    dropbox: (options: DropboxOptions) => {
        id: "dropbox";
        name: string;
        createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: DropboxOptions;
    };
    kick: (options: KickOptions) => {
        id: "kick";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI, codeVerifier }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode({ code, redirectURI, codeVerifier }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }): Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: KickOptions;
    };
    linkedin: (options: LinkedInOptions) => {
        id: "linkedin";
        name: string;
        createAuthorizationURL: ({ state, scopes, redirectURI, loginHint, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: LinkedInOptions;
    };
    gitlab: (options: GitlabOptions) => {
        id: "gitlab";
        name: string;
        createAuthorizationURL: ({ state, scopes, codeVerifier, loginHint, redirectURI, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: GitlabOptions;
    };
    tiktok: (options: TiktokOptions) => {
        id: "tiktok";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): URL;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: TiktokOptions;
    };
    reddit: (options: RedditOptions) => {
        id: "reddit";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: RedditOptions;
    };
    roblox: (options: RobloxOptions) => {
        id: "roblox";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): URL;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: RobloxOptions;
    };
    vk: (options: VkOption) => {
        id: "vk";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI, deviceId, }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        refreshAccessToken: (refreshToken: string) => Promise<OAuth2Tokens>;
        getUserInfo(data: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
        options: VkOption;
    };
    zoom: (userOptions: ZoomOptions) => {
        id: "zoom";
        name: string;
        createAuthorizationURL: ({ state, redirectURI, codeVerifier }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
            display?: string;
            loginHint?: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
            deviceId?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens & {
            user?: {
                name?: {
                    firstName?: string;
                    lastName?: string;
                };
                email?: string;
            };
        }): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
};
declare const socialProviderList: ["github", ...(keyof typeof socialProviders)[]];
declare const SocialProviderListEnum: z.ZodType<SocialProviderList[number] | (string & {})>;
type SocialProvider = z.infer<typeof SocialProviderListEnum>;
type SocialProviders = {
    [K in SocialProviderList[number]]?: Prettify<Parameters<(typeof socialProviders)[K]>[0] & {
        enabled?: boolean;
    }>;
};

type SocialProviderList = typeof socialProviderList;

/**
 * Adapter where clause
 */
type Where = {
    operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "contains" | "starts_with" | "ends_with";
    value: string | number | boolean | string[] | number[] | Date | null;
    field: string;
    connector?: "AND" | "OR";
};
/**
 * Adapter Interface
 */
type Adapter = {
    id: string;
    create: <T extends Record<string, any>, R = T>(data: {
        model: string;
        data: Omit<T, "id">;
        select?: string[];
        /**
         * By default, any `id` provided in `data` will be ignored.
         *
         * If you want to force the `id` to be the same as the `data.id`, set this to `true`.
         */
        forceAllowId?: boolean;
    }) => Promise<R>;
    findOne: <T>(data: {
        model: string;
        where: Where[];
        select?: string[];
    }) => Promise<T | null>;
    findMany: <T>(data: {
        model: string;
        where?: Where[];
        limit?: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }) => Promise<T[]>;
    count: (data: {
        model: string;
        where?: Where[];
    }) => Promise<number>;
    /**
     * ⚠︎ Update may not return the updated data
     * if multiple where clauses are provided
     */
    update: <T>(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<T | null>;
    updateMany: (data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<number>;
    delete: <T>(data: {
        model: string;
        where: Where[];
    }) => Promise<void>;
    deleteMany: (data: {
        model: string;
        where: Where[];
    }) => Promise<number>;
    /**
     *
     * @param options
     * @param file - file path if provided by the user
     */
    createSchema?: (options: BetterAuthOptions, file?: string) => Promise<AdapterSchemaCreation>;
    options?: Record<string, any>;
};
type AdapterSchemaCreation = {
    /**
     * Code to be inserted into the file
     */
    code: string;
    /**
     * Path to the file, including the file name and extension.
     * Relative paths are supported, with the current working directory of the developer's project as the base.
     */
    path: string;
    /**
     * Append the file if it already exists.
     * Note: This will not apply if `overwrite` is set to true.
     */
    append?: boolean;
    /**
     * Overwrite the file if it already exists
     */
    overwrite?: boolean;
};
interface AdapterInstance {
    (options: BetterAuthOptions): Adapter;
}
interface SecondaryStorage {
    /**
     *
     * @param key - Key to get
     * @returns - Value of the key
     */
    get: (key: string) => Promise<string | null> | string | null;
    set: (
    /**
     * Key to store
     */
    key: string, 
    /**
     * Value to store
     */
    value: string, 
    /**
     * Time to live in seconds
     */
    ttl?: number) => Promise<void | null | string> | void;
    /**
     *
     * @param key - Key to delete
     */
    delete: (key: string) => Promise<void | null | string> | void;
}

type Models = "user" | "account" | "session" | "verification" | "rate-limit" | "organization" | "member" | "invitation" | "jwks" | "passkey" | "two-factor";
type AdditionalUserFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user", "input"> & InferFieldsFromOptions<Options, "user", "input">;
type AdditionalUserFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user"> & InferFieldsFromOptions<Options, "user">;
type AdditionalSessionFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session", "input"> & InferFieldsFromOptions<Options, "session", "input">;
type AdditionalSessionFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session"> & InferFieldsFromOptions<Options, "session">;
type InferUser<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<User & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
type InferSession<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<Session & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
type InferPluginTypes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$Infer"] extends Record<string, any> ? P["$Infer"] : {} : {}> : {};
interface RateLimit {
    /**
     * The key to use for rate limiting
     */
    key: string;
    /**
     * The number of requests made
     */
    count: number;
    /**
     * The last request time in milliseconds
     */
    lastRequest: number;
}
type User = z.infer<typeof userSchema>;
type Account = z.infer<typeof accountSchema>;
type Session = z.infer<typeof sessionSchema>;
type Verification = z.infer<typeof verificationSchema>;

type AdapterDebugLogs = boolean | {
    /**
     * Useful when you want to log only certain conditions.
     */
    logCondition?: (() => boolean) | undefined;
    create?: boolean;
    update?: boolean;
    updateMany?: boolean;
    findOne?: boolean;
    findMany?: boolean;
    delete?: boolean;
    deleteMany?: boolean;
    count?: boolean;
} | {
    /**
     * Only used for adapter tests to show debug logs if a test fails.
     *
     * @deprecated Not actually deprecated. Doing this for IDEs to show this option at the very bottom and stop end-users from using this.
     */
    isRunningAdapterTests: boolean;
};
interface AdapterConfig {
    /**
     * Use plural table names.
     *
     * All tables will be named with an `s` at the end.
     *
     * @default false
     */
    usePlural?: boolean;
    /**
     * Enable debug logs.
     *
     * @default false
     */
    debugLogs?: AdapterDebugLogs;
    /**
     * Name of the adapter.
     *
     * This is used to identify the adapter in the debug logs.
     *
     * @default `adapterId`
     */
    adapterName?: string;
    /**
     * Adapter id
     */
    adapterId: string;
    /**
     * If the database supports numeric ids, set this to `true`.
     *
     * @default true
     */
    supportsNumericIds?: boolean;
    /**
     * If the database doesn't support JSON columns, set this to `false`.
     *
     * We will handle the translation between using `JSON` columns, and saving `string`s to the database.
     *
     * @default false
     */
    supportsJSON?: boolean;
    /**
     * If the database doesn't support dates, set this to `false`.
     *
     * We will handle the translation between using `Date` objects, and saving `string`s to the database.
     *
     * @default true
     */
    supportsDates?: boolean;
    /**
     * If the database doesn't support booleans, set this to `false`.
     *
     * We will handle the translation between using `boolean`s, and saving `0`s and `1`s to the database.
     *
     * @default true
     */
    supportsBooleans?: boolean;
    /**
     * Disable id generation for the `create` method.
     *
     * This is useful for databases that don't support custom id values and would auto-generate them for you.
     *
     * @default false
     */
    disableIdGeneration?: boolean;
    /**
     * Map the keys of the input data.
     *
     * This is useful for databases that expect a different key name for a given situation.
     *
     * For example, MongoDB uses `_id` while in Better-Auth we use `id`.
     *
     *
     * @example
     * Each key represents the old key to replace.
     * The value represents the new key
     *
     * This can be a partial object that only transforms some keys.
     *
     * ```ts
     * mapKeysTransformInput: {
     *	id: "_id" // We want to replace `id` to `_id` to save into MongoDB
     * }
     * ```
     */
    mapKeysTransformInput?: Record<string, string>;
    /**
     * Map the keys of the output data.
     *
     * This is useful for databases that expect a different key name for a given situation.
     *
     * For example, MongoDB uses `_id` while in Better-Auth we use `id`.
     *
     * @example
     * Each key represents the old key to replace.
     * The value represents the new key
     *
     * This can be a partial object that only transforms some keys.
     *
     * ```ts
     * mapKeysTransformOutput: {
     * 	_id: "id" // In MongoDB, we save `id` as `_id`. So we want to replace `_id` with `id` when we get the data back.
     * }
     * ```
     */
    mapKeysTransformOutput?: Record<string, string>;
    /**
     * Custom transform input function.
     *
     * This function is used to transform the input data before it is saved to the database.
     */
    customTransformInput?: (props: {
        data: any;
        /**
         * The fields of the model.
         */
        fieldAttributes: FieldAttribute;
        /**
         * The field to transform.
         */
        field: string;
        /**
         * The action which was called from the adapter.
         */
        action: "create" | "update";
        /**
         * The model name.
         */
        model: string;
        /**
         * The schema of the user's Better-Auth instance.
         */
        schema: BetterAuthDbSchema;
        /**
         * The options of the user's Better-Auth instance.
         */
        options: BetterAuthOptions;
    }) => any;
    /**
     * Custom transform output function.
     *
     * This function is used to transform the output data before it is returned to the user.
     */
    customTransformOutput?: (props: {
        data: any;
        /**
         * The fields of the model.
         */
        fieldAttributes: FieldAttribute;
        /**
         * The field to transform.
         */
        field: string;
        /**
         * The fields to select.
         */
        select: string[];
        /**
         * The model name.
         */
        model: string;
        /**
         * The schema of the user's Better-Auth instance.
         */
        schema: BetterAuthDbSchema;
        /**
         * The options of the user's Better-Auth instance.
         */
        options: BetterAuthOptions;
    }) => any;
    /**
     * Custom ID generator function.
     *
     * By default, we can handle ID generation for you, however if the database your adapter is for only supports a specific custom id generation,
     * then you can use this function to generate your own IDs.
     *
     *
     * Notes:
     * - If the user enabled `useNumberId`, then this option will be ignored. Unless this adapter config has `supportsNumericIds` set to `false`.
     * - If `generateId` is `false` in the user's Better-Auth config, then this option will be ignored.
     * - If `generateId` is a function, then it will override this option.
     *
     * @example
     *
     * ```ts
     * customIdGenerator: ({ model }) => {
     * 	return "my-super-unique-id";
     * }
     * ```
     */
    customIdGenerator?: (props: {
        model: string;
    }) => string;
}
type CreateCustomAdapter = ({ options, debugLog, schema, getDefaultModelName, getDefaultFieldName, }: {
    options: BetterAuthOptions;
    /**
     * The schema of the user's Better-Auth instance.
     */
    schema: BetterAuthDbSchema;
    /**
     * The debug log function.
     *
     * If the config has defined `debugLogs` as `false`, no logs will be shown.
     */
    debugLog: (...args: any[]) => void;
    /**
     * Get the model name which is expected to be saved in the database based on the user's schema.
     */
    getModelName: (model: string) => string;
    /**
     * Get the field name which is expected to be saved in the database based on the user's schema.
     */
    getFieldName: ({ model, field }: {
        model: string;
        field: string;
    }) => string;
    /**
     * This function helps us get the default model name from the schema defined by devs.
     * Often times, the user will be using the `modelName` which could had been customized by the users.
     * This function helps us get the actual model name useful to match against the schema. (eg: schema[model])
     *
     * If it's still unclear what this does:
     *
     * 1. User can define a custom modelName.
     * 2. When using a custom modelName, doing something like `schema[model]` will not work.
     * 3. Using this function helps us get the actual model name based on the user's defined custom modelName.
     * 4. Thus allowing us to use `schema[model]`.
     */
    getDefaultModelName: (model: string) => string;
    /**
     * This function helps us get the default field name from the schema defined by devs.
     * Often times, the user will be using the `fieldName` which could had been customized by the users.
     * This function helps us get the actual field name useful to match against the schema. (eg: schema[model].fields[field])
     *
     * If it's still unclear what this does:
     *
     * 1. User can define a custom fieldName.
     * 2. When using a custom fieldName, doing something like `schema[model].fields[field]` will not work.
     *
     */
    getDefaultFieldName: ({ model, field, }: {
        model: string;
        field: string;
    }) => string;
    /**
     * Get the field attributes for a given model and field.
     *
     * Note: any model name or field name is allowed, whether default to schema or not.
     */
    getFieldAttributes: ({ model, field, }: {
        model: string;
        field: string;
    }) => FieldAttribute;
}) => CustomAdapter;
interface CustomAdapter {
    create: <T extends Record<string, any>>({ data, model, select, }: {
        model: string;
        data: T;
        select?: string[];
    }) => Promise<T>;
    update: <T>(data: {
        model: string;
        where: CleanedWhere[];
        update: T;
    }) => Promise<T | null>;
    updateMany: (data: {
        model: string;
        where: CleanedWhere[];
        update: Record<string, any>;
    }) => Promise<number>;
    findOne: <T>({ model, where, select, }: {
        model: string;
        where: CleanedWhere[];
        select?: string[];
    }) => Promise<T | null>;
    findMany: <T>({ model, where, limit, sortBy, offset, }: {
        model: string;
        where?: CleanedWhere[];
        limit: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }) => Promise<T[]>;
    delete: ({ model, where, }: {
        model: string;
        where: CleanedWhere[];
    }) => Promise<void>;
    deleteMany: ({ model, where, }: {
        model: string;
        where: CleanedWhere[];
    }) => Promise<number>;
    count: ({ model, where, }: {
        model: string;
        where?: CleanedWhere[];
    }) => Promise<number>;
    createSchema?: (props: {
        /**
         * The file the user may have passed in to the `generate` command as the expected schema file output path.
         */
        file?: string;
        /**
         * The tables from the user's Better-Auth instance schema.
         */
        tables: BetterAuthDbSchema;
    }) => Promise<AdapterSchemaCreation>;
    /**
     * Your adapter's options.
     */
    options?: Record<string, any> | undefined;
}
type CleanedWhere = Prettify<Required<Where>>;
type AdapterTestDebugLogs = {
    resetDebugLogs: () => void;
    printDebugLogs: () => void;
};

type BetterAuthOptions = {
    /**
     * The name of the application
     *
     * process.env.APP_NAME
     *
     * @default "Better Auth"
     */
    appName?: string;
    /**
     * Base URL for the Better Auth. This is typically the
     * root URL where your application server is hosted.
     * If not explicitly set,
     * the system will check the following environment variable:
     *
     * process.env.BETTER_AUTH_URL
     *
     * If not set it will throw an error.
     */
    baseURL?: string;
    /**
     * Base path for the Better Auth. This is typically
     * the path where the
     * Better Auth routes are mounted.
     *
     * @default "/api/auth"
     */
    basePath?: string;
    /**
     * The secret to use for encryption,
     * signing and hashing.
     *
     * By default Better Auth will look for
     * the following environment variables:
     * process.env.BETTER_AUTH_SECRET,
     * process.env.AUTH_SECRET
     * If none of these environment
     * variables are set,
     * it will default to
     * "better-auth-secret-123456789".
     *
     * on production if it's not set
     * it will throw an error.
     *
     * you can generate a good secret
     * using the following command:
     * @example
     * ```bash
     * openssl rand -base64 32
     * ```
     */
    secret?: string;
    /**
     * Database configuration
     */
    database?: PostgresPool | MysqlPool | Database | Dialect | AdapterInstance | Database$1 | {
        dialect: Dialect;
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
        /**
         * Enable debug logs for the adapter
         *
         * @default false
         */
        debugLogs?: AdapterDebugLogs;
    } | {
        /**
         * Kysely instance
         */
        db: Kysely<any>;
        /**
         * Database type between postgres, mysql and sqlite
         */
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
        /**
         * Enable debug logs for the adapter
         *
         * @default false
         */
        debugLogs?: AdapterDebugLogs;
    };
    /**
     * Secondary storage configuration
     *
     * This is used to store session and rate limit data.
     */
    secondaryStorage?: SecondaryStorage;
    /**
     * Email verification configuration
     */
    emailVerification?: {
        /**
         * Send a verification email
         * @param data the data object
         * @param request the request object
         */
        sendVerificationEmail?: (
        /**
         * @param user the user to send the
         * verification email to
         * @param url the URL to send the verification email to
         * it contains the token as well
         * @param token the token to send the verification email to
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Send a verification email automatically
         * after sign up
         *
         * @default false
         */
        sendOnSignUp?: boolean;
        /**
         * Auto signin the user after they verify their email
         */
        autoSignInAfterVerification?: boolean;
        /**
         * Number of seconds the verification token is
         * valid for.
         * @default 3600 seconds (1 hour)
         */
        expiresIn?: number;
        /**
         * A function that is called when a user verifies their email
         * @param user the user that verified their email
         * @param request the request object
         */
        onEmailVerification?: (user: User, request?: Request) => Promise<void>;
    };
    /**
     * Email and password authentication
     */
    emailAndPassword?: {
        /**
         * Enable email and password authentication
         *
         * @default false
         */
        enabled: boolean;
        /**
         * Disable email and password sign up
         *
         * @default false
         */
        disableSignUp?: boolean;
        /**
         * Require email verification before a session
         * can be created for the user.
         *
         * if the user is not verified, the user will not be able to sign in
         * and on sign in attempts, the user will be prompted to verify their email.
         */
        requireEmailVerification?: boolean;
        /**
         * The maximum length of the password.
         *
         * @default 128
         */
        maxPasswordLength?: number;
        /**
         * The minimum length of the password.
         *
         * @default 8
         */
        minPasswordLength?: number;
        /**
         * send reset password
         */
        sendResetPassword?: (
        /**
         * @param user the user to send the
         * reset password email to
         * @param url the URL to send the reset password email to
         * @param token the token to send to the user (could be used instead of sending the url
         * if you need to redirect the user to custom route)
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Number of seconds the reset password token is
         * valid for.
         * @default 1 hour (60 * 60)
         */
        resetPasswordTokenExpiresIn?: number;
        /**
         * Password hashing and verification
         *
         * By default Scrypt is used for password hashing and
         * verification. You can provide your own hashing and
         * verification function. if you want to use a
         * different algorithm.
         */
        password?: {
            hash?: (password: string) => Promise<string>;
            verify?: (data: {
                hash: string;
                password: string;
            }) => Promise<boolean>;
        };
        /**
         * Automatically sign in the user after sign up
         *
         * @default true
         */
        autoSignIn?: boolean;
        /**
         * Whether to revoke all other sessions when resetting password
         * @default false
         */
        revokeSessionsOnPasswordReset?: boolean;
    };
    /**
     * list of social providers
     */
    socialProviders?: SocialProviders;
    /**
     * OAuth configuration
     */
    oauth?: {
        /**
         * Configurable state management for OAuth flows
         *
         * Allows custom state generation and parsing strategies for alternative
         * state management approaches. When not configured, falls back to the
         * default database-based state management using the verification table.
         *
         * @example
         * ```ts
         * oauth: {
         *   stateManagement: {
         *     generateState: async (ctx, payload) => {
         *       // Custom state generation logic
         *       return encryptedState;
         *     },
         *     parseState: async (ctx, state) => {
         *       // Custom state parsing logic
         *       return parsedPayload;
         *     }
         *   }
         * }
         * ```
         */
        stateManagement?: StateManagement;
    };
    /**
     * List of Better Auth plugins
     */
    plugins?: BetterAuthPlugin[];
    /**
     * User configuration
     */
    user?: {
        /**
         * The model name for the user. Defaults to "user".
         */
        modelName?: string;
        /**
         * Map fields
         *
         * @example
         * ```ts
         * {
         *  userId: "user_id"
         * }
         * ```
         */
        fields?: Partial<Record<keyof OmitId<User>, string>>;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * Changing email configuration
         */
        changeEmail?: {
            /**
             * Enable changing email
             * @default false
             */
            enabled: boolean;
            /**
             * Send a verification email when the user changes their email.
             * @param data the data object
             * @param request the request object
             */
            sendChangeEmailVerification?: (data: {
                user: User;
                newEmail: string;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
        };
        /**
         * User deletion configuration
         */
        deleteUser?: {
            /**
             * Enable user deletion
             */
            enabled?: boolean;
            /**
             * Send a verification email when the user deletes their account.
             *
             * if this is not set, the user will be deleted immediately.
             * @param data the data object
             * @param request the request object
             */
            sendDeleteAccountVerification?: (data: {
                user: User;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
            /**
             * A function that is called before a user is deleted.
             *
             * to interrupt with error you can throw `APIError`
             */
            beforeDelete?: (user: User, request?: Request) => Promise<void>;
            /**
             * A function that is called after a user is deleted.
             *
             * This is useful for cleaning up user data
             */
            afterDelete?: (user: User, request?: Request) => Promise<void>;
            /**
             * The expiration time for the delete token.
             *
             * @default 1 day (60 * 60 * 24) in seconds
             */
            deleteTokenExpiresIn?: number;
        };
    };
    session?: {
        /**
         * The model name for the session.
         *
         * @default "session"
         */
        modelName?: string;
        /**
         * Map fields
         *
         * @example
         * ```ts
         * {
         *  userId: "user_id"
         * }
         */
        fields?: Partial<Record<keyof OmitId<Session>, string>>;
        /**
         * Expiration time for the session token. The value
         * should be in seconds.
         * @default 7 days (60 * 60 * 24 * 7)
         */
        expiresIn?: number;
        /**
         * How often the session should be refreshed. The value
         * should be in seconds.
         * If set 0 the session will be refreshed every time it is used.
         * @default 1 day (60 * 60 * 24)
         */
        updateAge?: number;
        /**
         * Disable session refresh so that the session is not updated
         * regardless of the `updateAge` option.
         *
         * @default false
         */
        disableSessionRefresh?: boolean;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * By default if secondary storage is provided
         * the session is stored in the secondary storage.
         *
         * Set this to true to store the session in the database
         * as well.
         *
         * Reads are always done from the secondary storage.
         *
         * @default false
         */
        storeSessionInDatabase?: boolean;
        /**
         * By default, sessions are deleted from the database when secondary storage
         * is provided when session is revoked.
         *
         * Set this to true to preserve session records in the database,
         * even if they are deleted from the secondary storage.
         *
         * @default false
         */
        preserveSessionInDatabase?: boolean;
        /**
         * Enable caching session in cookie
         */
        cookieCache?: {
            /**
             * max age of the cookie
             * @default 5 minutes (5 * 60)
             */
            maxAge?: number;
            /**
             * Enable caching session in cookie
             * @default false
             */
            enabled?: boolean;
        };
        /**
         * The age of the session to consider it fresh.
         *
         * This is used to check if the session is fresh
         * for sensitive operations. (e.g. deleting an account)
         *
         * If the session is not fresh, the user should be prompted
         * to sign in again.
         *
         * If set to 0, the session will be considered fresh every time. (⚠︎ not recommended)
         *
         * @default 1 day (60 * 60 * 24)
         */
        freshAge?: number;
    };
    account?: {
        modelName?: string;
        fields?: Partial<Record<keyof OmitId<Account>, string>>;
        /**
         * When enabled (true), the user account data (accessToken, idToken, refreshToken, etc.)
         * will be updated on sign in with the latest data from the provider.
         *
         * @default true
         */
        updateAccountOnSignIn?: boolean;
        /**
         * Configuration for account linking.
         */
        accountLinking?: {
            /**
             * Enable account linking
             *
             * @default true
             */
            enabled?: boolean;
            /**
             * List of trusted providers
             */
            trustedProviders?: Array<LiteralUnion<SocialProviderList[number] | "email-password", string>>;
            /**
             * If enabled (true), this will allow users to manually linking accounts with different email addresses than the main user.
             *
             * @default false
             *
             * ⚠️ Warning: enabling this might lead to account takeovers, so proceed with caution.
             */
            allowDifferentEmails?: boolean;
            /**
             * If enabled (true), this will allow users to unlink all accounts.
             *
             * @default false
             */
            allowUnlinkingAll?: boolean;
            /**
             * If enabled (true), this will update the user information based on the newly linked account
             *
             * @default false
             */
            updateUserInfoOnLink?: boolean;
        };
    };
    /**
     * Verification configuration
     */
    verification?: {
        /**
         * Change the modelName of the verification table
         */
        modelName?: string;
        /**
         * Map verification fields
         */
        fields?: Partial<Record<keyof OmitId<Verification>, string>>;
        /**
         * disable cleaning up expired values when a verification value is
         * fetched
         */
        disableCleanup?: boolean;
    };
    /**
     * List of trusted origins.
     */
    trustedOrigins?: string[] | ((request: Request) => string[] | Promise<string[]>);
    /**
     * Rate limiting configuration
     */
    rateLimit?: {
        /**
         * By default, rate limiting is only
         * enabled on production.
         */
        enabled?: boolean;
        /**
         * Default window to use for rate limiting. The value
         * should be in seconds.
         *
         * @default 10 seconds
         */
        window?: number;
        /**
         * The default maximum number of requests allowed within the window.
         *
         * @default 100 requests
         */
        max?: number;
        /**
         * Custom rate limit rules to apply to
         * specific paths.
         */
        customRules?: {
            [key: string]: {
                /**
                 * The window to use for the custom rule.
                 */
                window: number;
                /**
                 * The maximum number of requests allowed within the window.
                 */
                max: number;
            } | ((request: Request) => {
                window: number;
                max: number;
            } | Promise<{
                window: number;
                max: number;
            }>);
        };
        /**
         * Storage configuration
         *
         * By default, rate limiting is stored in memory. If you passed a
         * secondary storage, rate limiting will be stored in the secondary
         * storage.
         *
         * @default "memory"
         */
        storage?: "memory" | "database" | "secondary-storage";
        /**
         * If database is used as storage, the name of the table to
         * use for rate limiting.
         *
         * @default "rateLimit"
         */
        modelName?: string;
        /**
         * Custom field names for the rate limit table
         */
        fields?: Record<keyof RateLimit, string>;
        /**
         * custom storage configuration.
         *
         * NOTE: If custom storage is used storage
         * is ignored
         */
        customStorage?: {
            get: (key: string) => Promise<RateLimit | undefined>;
            set: (key: string, value: RateLimit) => Promise<void>;
        };
    };
    /**
     * Advanced options
     */
    advanced?: {
        /**
         * Ip address configuration
         */
        ipAddress?: {
            /**
             * List of headers to use for ip address
             *
             * Ip address is used for rate limiting and session tracking
             *
             * @example ["x-client-ip", "x-forwarded-for"]
             *
             * @default
             * @link https://github.com/better-auth/better-auth/blob/main/packages/better-auth/src/utils/get-request-ip.ts#L8
             */
            ipAddressHeaders?: string[];
            /**
             * Disable ip tracking
             *
             * ⚠︎ This is a security risk and it may expose your application to abuse
             */
            disableIpTracking?: boolean;
        };
        /**
         * Use secure cookies
         *
         * @default false
         */
        useSecureCookies?: boolean;
        /**
         * Disable trusted origins check
         *
         * ⚠︎ This is a security risk and it may expose your application to CSRF attacks
         */
        disableCSRFCheck?: boolean;
        /**
         * Configure cookies to be cross subdomains
         */
        crossSubDomainCookies?: {
            /**
             * Enable cross subdomain cookies
             */
            enabled: boolean;
            /**
             * Additional cookies to be shared across subdomains
             */
            additionalCookies?: string[];
            /**
             * The domain to use for the cookies
             *
             * By default, the domain will be the root
             * domain from the base URL.
             */
            domain?: string;
        };
        cookies?: {
            [key: string]: {
                name?: string;
                attributes?: CookieOptions;
            };
        };
        defaultCookieAttributes?: CookieOptions;
        /**
         * Prefix for cookies. If a cookie name is provided
         * in cookies config, this will be overridden.
         *
         * @default
         * ```txt
         * "appName" -> which defaults to "better-auth"
         * ```
         */
        cookiePrefix?: string;
        /**
         * Database configuration.
         */
        database?: {
            /**
             * The default number of records to return from the database
             * when using the `findMany` adapter method.
             *
             * @default 100
             */
            defaultFindManyLimit?: number;
            /**
             * If your database auto increments number ids, set this to `true`.
             *
             * Note: If enabled, we will not handle ID generation (including if you use `generateId`), and it would be expected that your database will provide the ID automatically.
             *
             * @default false
             */
            useNumberId?: boolean;
            /**
             * Custom generateId function.
             *
             * If not provided, random ids will be generated.
             * If set to false, the database's auto generated id will be used.
             */
            generateId?: ((options: {
                model: LiteralUnion<Models, string>;
                size?: number;
            }) => string) | false;
        };
        /**
         * Custom generateId function.
         *
         * If not provided, random ids will be generated.
         * If set to false, the database's auto generated id will be used.
         *
         * @deprecated Please use `database.generateId` instead. This will be potentially removed in future releases.
         */
        generateId?: ((options: {
            model: LiteralUnion<Models, string>;
            size?: number;
        }) => string) | false;
    };
    logger?: Logger;
    /**
     * allows you to define custom hooks that can be
     * executed during lifecycle of core database
     * operations.
     */
    databaseHooks?: {
        /**
         * User hooks
         */
        user?: {
            create?: {
                /**
                 * Hook that is called before a user is created.
                 * if the hook returns false, the user will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: User, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<User> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a user is created.
                 */
                after?: (user: User, context?: GenericEndpointContext) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: Partial<User>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<User & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a user is updated.
                 */
                after?: (user: User, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Session Hook
         */
        session?: {
            create?: {
                /**
                 * Hook that is called before a session is created.
                 * if the hook returns false, the session will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Session, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Session> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is created.
                 */
                after?: (session: Session, context?: GenericEndpointContext) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the session will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Partial<Session>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Session & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is updated.
                 */
                after?: (session: Session, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Account Hook
         */
        account?: {
            create?: {
                /**
                 * Hook that is called before a account is created.
                 * If the hook returns false, the account will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Account, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Account> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a account is created.
                 */
                after?: (account: Account, context?: GenericEndpointContext) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a account is update.
                 * If the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Partial<Account>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Account & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a account is updated.
                 */
                after?: (account: Account, context?: GenericEndpointContext) => Promise<void>;
            };
        };
        /**
         * Verification Hook
         */
        verification?: {
            create?: {
                /**
                 * Hook that is called before a verification is created.
                 * if the hook returns false, the verification will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Verification, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Verification> & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a verification is created.
                 */
                after?: (verification: Verification, context?: GenericEndpointContext) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a verification is updated.
                 * if the hook returns false, the verification will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Partial<Verification>, context?: GenericEndpointContext) => Promise<boolean | void | {
                    data: Partial<Verification & Record<string, any>>;
                }>;
                /**
                 * Hook that is called after a verification is updated.
                 */
                after?: (verification: Verification, context?: GenericEndpointContext) => Promise<void>;
            };
        };
    };
    /**
     * API error handling
     */
    onAPIError?: {
        /**
         * Throw an error on API error
         *
         * @default false
         */
        throw?: boolean;
        /**
         * Custom error handler
         *
         * @param error
         * @param ctx - Auth context
         */
        onError?: (error: unknown, ctx: AuthContext) => void | Promise<void>;
        /**
         * The URL to redirect to on error
         *
         * When errorURL is provided, the error will be added to the URL as a query parameter
         * and the user will be redirected to the errorURL.
         *
         * @default - "/api/auth/error"
         */
        errorURL?: string;
    };
    /**
     * Hooks
     */
    hooks?: {
        /**
         * Before a request is processed
         */
        before?: AuthMiddleware;
        /**
         * After a request is processed
         */
        after?: AuthMiddleware;
    };
    /**
     * Disabled paths
     *
     * Paths you want to disable.
     */
    disabledPaths?: string[];
};

type FilteredAPI<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? K extends "getSession" ? K : API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type FilterActions<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type InferSessionAPI<API> = API extends {
    [key: string]: infer E;
} ? UnionToIntersection<E extends Endpoint ? E["path"] extends "/get-session" ? {
    getSession: <R extends boolean>(context: {
        headers: Headers;
        query?: {
            disableCookieCache?: boolean;
            disableRefresh?: boolean;
        };
        asResponse?: R;
    }) => false extends R ? Promise<PrettifyDeep<Awaited<ReturnType<E>>>> & {
        options: E["options"];
        path: E["path"];
    } : Promise<Response>;
} : never : never> : never;
type InferAPI<API> = InferSessionAPI<API> & FilteredAPI<API>;

declare const signInSocial: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            loginHint?: string | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            redirect: boolean;
            token: string;
            url: undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            url: string;
            redirect: boolean;
        };
    } : {
        redirect: boolean;
        token: string;
        url: undefined;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        url: string;
        redirect: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Callback URL to redirect to after the user
             * has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * callback url to redirect if the user is newly registered.
             *
             * useful if you have different routes for existing users and new users
             */
            newUserCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * Callback url to redirect to if an error happens
             *
             * If it's initiated from the client sdk this defaults to
             * the current url.
             */
            errorCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodType<"apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom", z.ZodTypeDef, "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom">;
            /**
             * Disable automatic redirection to the provider
             *
             * This is useful if you want to handle the redirection
             * yourself like in a popup or a different tab.
             */
            disableRedirect: z.ZodOptional<z.ZodBoolean>;
            /**
             * ID token from the provider
             *
             * This is used to sign in the user
             * if the user is already signed in with the
             * provider in the frontend.
             *
             * Only applicable if the provider supports
             * it. Currently only `apple` and `google` is
             * supported out of the box.
             */
            idToken: z.ZodOptional<z.ZodObject<{
                /**
                 * ID token from the provider
                 */
                token: z.ZodString;
                /**
                 * The nonce used to generate the token
                 */
                nonce: z.ZodOptional<z.ZodString>;
                /**
                 * Access token from the provider
                 */
                accessToken: z.ZodOptional<z.ZodString>;
                /**
                 * Refresh token from the provider
                 */
                refreshToken: z.ZodOptional<z.ZodString>;
                /**
                 * Expiry date of the token
                 */
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }>>;
            scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            /**
             * Explicitly request sign-up
             *
             * Should be used to allow sign up when
             * disableImplicitSignUp for this provider is
             * true
             */
            requestSignUp: z.ZodOptional<z.ZodBoolean>;
            /**
             * The login hint to use for the authorization code request
             */
            loginHint: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            loginHint?: string | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }, {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            loginHint?: string | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                operationId: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    description: string;
                                    properties: {
                                        redirect: {
                                            type: string;
                                            enum: boolean[];
                                        };
                                        token: {
                                            type: string;
                                            description: string;
                                            url: {
                                                type: string;
                                                nullable: boolean;
                                            };
                                            user: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    email: {
                                                        type: string;
                                                    };
                                                    name: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    image: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    emailVerified: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                required: string[];
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-in/social";
};
declare const signInEmail: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            email: string;
            password: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            redirect: boolean;
            token: string;
            url: string | undefined;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        redirect: boolean;
        token: string;
        url: string | undefined;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Email of the user
             */
            email: z.ZodString;
            /**
             * Password of the user
             */
            password: z.ZodString;
            /**
             * Callback URL to use as a redirect for email
             * verification and for possible redirects
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * If this is false, the session will not be remembered
             * @default true
             */
            rememberMe: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            password: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }, {
            email: string;
            password: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    description: string;
                                    properties: {
                                        redirect: {
                                            type: string;
                                            enum: boolean[];
                                        };
                                        token: {
                                            type: string;
                                            description: string;
                                        };
                                        url: {
                                            type: string;
                                            nullable: boolean;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                name: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                image: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-in/email";
};

declare const callbackOAuth: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        } | undefined;
    } & {
        method: "GET" | "POST";
    } & {
        query?: {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        } | undefined;
    } & {
        params: {
            id: string;
        };
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: void;
    } : void>;
    options: {
        method: ("GET" | "POST")[];
        body: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            device_id: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            user: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        }, {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        }>>;
        query: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            device_id: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            user: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        }, {
            code?: string | undefined;
            state?: string | undefined;
            error?: string | undefined;
            user?: string | undefined;
            device_id?: string | undefined;
            error_description?: string | undefined;
        }>>;
        metadata: {
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/callback/:id";
};

declare const getSession: <Option extends BetterAuthOptions>() => {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query?: {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        } | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            session: UnionToIntersection<StripEmptyObjects<{
                id: string;
                userId: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
            user: UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                emailVerified: boolean;
                name: string;
                image?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
        } | null;
    } : {
        session: UnionToIntersection<StripEmptyObjects<{
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
        user: UnionToIntersection<StripEmptyObjects<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
    } | null>;
    options: {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            /**
             * If cookie cache is enabled, it will disable the cache
             * and fetch the session from the database
             */
            disableCookieCache: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>>;
            disableRefresh: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
        }, "strip", z.ZodTypeAny, {
            disableCookieCache?: boolean | undefined;
            disableRefresh?: boolean | undefined;
        }, {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: string | boolean | undefined;
        }>>;
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        session: {
                                            $ref: string;
                                        };
                                        user: {
                                            $ref: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/get-session";
};
declare const getSessionFromCtx: <U extends Record<string, any> = Record<string, any>, S extends Record<string, any> = Record<string, any>>(ctx: GenericEndpointContext, config?: {
    disableCookieCache?: boolean;
    disableRefresh?: boolean;
}) => Promise<{
    session: S & Session;
    user: U & User;
} | null>;
declare const sessionMiddleware: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
    };
}>;
declare const requestOnlySessionMiddleware: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
    } | null;
}>;
declare const freshSessionMiddleware: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
    session: {
        session: Record<string, any> & {
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        };
        user: Record<string, any> & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            emailVerified: boolean;
            name: string;
            image?: string | null | undefined;
        };
    };
}>;
/**
 * user active sessions list
 */
declare const listSessions: <Option extends BetterAuthOptions>() => {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: Prettify<UnionToIntersection<StripEmptyObjects<{
            id: string;
            userId: string;
            expiresAt: Date;
            createdAt: Date;
            updatedAt: Date;
            token: string;
            ipAddress?: string | null | undefined;
            userAgent?: string | null | undefined;
        } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
    } : Prettify<UnionToIntersection<StripEmptyObjects<{
        id: string;
        userId: string;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
    options: {
        method: "GET";
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array";
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/list-sessions";
};
/**
 * revoke a single session
 */
declare const revokeSession: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            token: string;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    token: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-session";
};
/**
 * revoke all user sessions
 */
declare const revokeSessions: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-sessions";
};
declare const revokeOtherSessions: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/revoke-other-sessions";
};

declare const signOut: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            success: boolean;
        };
    } : {
        success: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        success: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-out";
};

declare const requestPasswordReset: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            email: string;
            redirectTo?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The email address of the user to send a password reset email to.
             */
            email: z.ZodString;
            /**
             * The URL to redirect the user to reset their password.
             * If the token isn't valid or expired, it'll be redirected with a query parameter `?
             * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
             * token=VALID_TOKEN
             */
            redirectTo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            redirectTo?: string | undefined;
        }, {
            email: string;
            redirectTo?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                        message: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/request-password-reset";
};
/**
 * @deprecated Use requestPasswordReset instead. This endpoint will be removed in the next major
 * version.
 */
declare const forgetPassword: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            email: string;
            redirectTo?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The email address of the user to send a password reset email to.
             */
            email: z.ZodString;
            /**
             * The URL to redirect the user to reset their password.
             * If the token isn't valid or expired, it'll be redirected with a query parameter `?
             * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
             * token=VALID_TOKEN
             */
            redirectTo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            redirectTo?: string | undefined;
        }, {
            email: string;
            redirectTo?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                        message: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/forget-password";
};
declare const requestPasswordResetCallback: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query: {
            callbackURL: string;
        };
    } & {
        params: {
            token: string;
        };
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: never;
    } : never>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            callbackURL: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            callbackURL: string;
        }, {
            callbackURL: string;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/reset-password/:token";
};
/**
 * @deprecated Use requestPasswordResetCallback instead
 */
declare const forgetPasswordCallback: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query: {
            callbackURL: string;
        };
    } & {
        params: {
            token: string;
        };
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: never;
    } : never>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            callbackURL: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            callbackURL: string;
        }, {
            callbackURL: string;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/reset-password/:token";
};
declare const resetPassword: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            newPassword: string;
            token?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: {
            token?: string | undefined;
        } | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
        }, {
            token?: string | undefined;
        }>>;
        body: z.ZodObject<{
            newPassword: z.ZodString;
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            token?: string | undefined;
        }, {
            newPassword: string;
            token?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/reset-password";
};

declare function createEmailVerificationToken(secret: string, email: string, 
/**
 * The email to update from
 */
updateTo?: string, 
/**
 * The time in seconds for the token to expire
 */
expiresIn?: number): Promise<string>;
/**
 * A function to send a verification email to the user
 */
declare function sendVerificationEmailFn(ctx: GenericEndpointContext, user: User): Promise<void>;
declare const sendVerificationEmail: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            email: string;
            callbackURL?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            email: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            callbackURL?: string | undefined;
        }, {
            email: string;
            callbackURL?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    email: {
                                        type: string;
                                        description: string;
                                        example: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                        example: string;
                                        nullable: boolean;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                            example: boolean;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    "400": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        message: {
                                            type: string;
                                            description: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/send-verification-email";
};
declare const verifyEmail: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: void | {
            status: boolean;
            user: {
                id: any;
                email: any;
                name: any;
                image: any;
                emailVerified: any;
                createdAt: any;
                updatedAt: any;
            };
        } | {
            status: boolean;
            user: null;
        };
    } : void | {
        status: boolean;
        user: {
            id: any;
            email: any;
            name: any;
            image: any;
            emailVerified: any;
            createdAt: any;
            updatedAt: any;
        };
    } | {
        status: boolean;
        user: null;
    }>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                parameters: ({
                    name: string;
                    in: "query";
                    description: string;
                    required: true;
                    schema: {
                        type: "string";
                    };
                } | {
                    name: string;
                    in: "query";
                    description: string;
                    required: false;
                    schema: {
                        type: "string";
                    };
                })[];
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/verify-email";
};

declare const updateUser: <O extends BetterAuthOptions>() => {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/update-user", {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            $Infer: {
                body: Partial<AdditionalUserFieldsInput<O>> & {
                    name?: string;
                    image?: string;
                };
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }>> extends true ? [better_call.InferBodyInput<{
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            $Infer: {
                body: Partial<AdditionalUserFieldsInput<O>> & {
                    name?: string;
                    image?: string;
                };
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }, Partial<AdditionalUserFieldsInput<O>> & {
        name?: string;
        image?: string;
    }> & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }] : [((better_call.InferBodyInput<{
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            $Infer: {
                body: Partial<AdditionalUserFieldsInput<O>> & {
                    name?: string;
                    image?: string;
                };
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }, Partial<AdditionalUserFieldsInput<O>> & {
        name?: string;
        image?: string;
    }> & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            $Infer: {
                body: Partial<AdditionalUserFieldsInput<O>> & {
                    name?: string;
                    image?: string;
                };
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/update-user";
};
declare const changePassword: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            token: string | null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        token: string | null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
            /**
             * The current password of the user
             */
            currentPassword: z.ZodString;
            /**
             * revoke all sessions that are not the
             * current one logged in by the user
             */
            revokeOtherSessions: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                            nullable: boolean;
                                            description: string;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/change-password";
};
declare const setPassword: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            newPassword: string;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
        }, {
            newPassword: string;
        }>;
        metadata: {
            SERVER_ONLY: true;
        };
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
    } & {
        use: any[];
    };
    path: "/set-password";
};
declare const deleteUser: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            token?: string | undefined;
            callbackURL?: string | undefined;
            password?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            success: boolean;
            message: string;
        };
    } : {
        success: boolean;
        message: string;
    }>;
    options: {
        method: "POST";
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        body: z.ZodObject<{
            /**
             * The callback URL to redirect to after the user is deleted
             * this is only used on delete user callback
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * The password of the user. If the password isn't provided, session freshness
             * will be checked.
             */
            password: z.ZodOptional<z.ZodString>;
            /**
             * The token to delete the user. If the token is provided, the user will be deleted
             */
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
            callbackURL?: string | undefined;
            password?: string | undefined;
        }, {
            token?: string | undefined;
            callbackURL?: string | undefined;
            password?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        success: {
                                            type: string;
                                            description: string;
                                        };
                                        message: {
                                            type: string;
                                            enum: string[];
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/delete-user";
};
declare const deleteUserCallback: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query: {
            token: string;
            callbackURL?: string | undefined;
        };
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            success: boolean;
            message: string;
        };
    } : {
        success: boolean;
        message: string;
    }>;
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        success: {
                                            type: string;
                                            description: string;
                                        };
                                        message: {
                                            type: string;
                                            enum: string[];
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/delete-user/callback";
};
declare const changeEmail: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            newEmail: string;
            callbackURL?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            newEmail: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newEmail: string;
            callbackURL?: string | undefined;
        }, {
            newEmail: string;
            callbackURL?: string | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                            description: string;
                                        };
                                        message: {
                                            type: string;
                                            enum: string[];
                                            description: string;
                                            nullable: boolean;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/change-email";
};

declare const error: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: Response;
    } : Response>;
    options: {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "text/html": {
                                schema: {
                                    type: "string";
                                    description: string;
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/error";
};

declare const ok: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            ok: boolean;
        };
    } : {
        ok: boolean;
    }>;
    options: {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        ok: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    } & {
        use: any[];
    };
    path: "/ok";
};

declare const signUpEmail: <O extends BetterAuthOptions>() => {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/sign-up/email", {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        metadata: {
            $Infer: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & AdditionalUserFieldsInput<O>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                            nullable: boolean;
                                            description: string;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }>> extends true ? [better_call.InferBodyInput<{
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        metadata: {
            $Infer: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & AdditionalUserFieldsInput<O>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                            nullable: boolean;
                                            description: string;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }, {
        name: string;
        email: string;
        password: string;
        callbackURL?: string;
    } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">> & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }] : [((better_call.InferBodyInput<{
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        metadata: {
            $Infer: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & AdditionalUserFieldsInput<O>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                            nullable: boolean;
                                            description: string;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    }, {
        name: string;
        email: string;
        password: string;
        callbackURL?: string;
    } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">> & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            token: null;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        } | {
            token: string;
            user: {
                id: string;
                email: string;
                name: string;
                image: string | null | undefined;
                emailVerified: boolean;
                createdAt: Date;
                updatedAt: Date;
            };
        };
    } : {
        token: null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    options: {
        method: "POST";
        body: z.ZodRecord<z.ZodString, z.ZodAny>;
        metadata: {
            $Infer: {
                body: {
                    name: string;
                    email: string;
                    password: string;
                    callbackURL?: string;
                } & AdditionalUserFieldsInput<O>;
            };
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                required: string[];
                            };
                        };
                    };
                };
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        token: {
                                            type: string;
                                            nullable: boolean;
                                            description: string;
                                        };
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    format: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                    description: string;
                                                };
                                                createdAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                                updatedAt: {
                                                    type: string;
                                                    format: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/sign-up/email";
};

declare const listUserAccounts: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
        body?: undefined;
    } & {
        method?: "GET" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            id: string;
            provider: string;
            createdAt: Date;
            updatedAt: Date;
            accountId: string;
            scopes: string[];
        }[];
    } : {
        id: string;
        provider: string;
        createdAt: Date;
        updatedAt: Date;
        accountId: string;
        scopes: string[];
    }[]>;
    options: {
        method: "GET";
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array";
                                    items: {
                                        type: string;
                                        properties: {
                                            id: {
                                                type: string;
                                            };
                                            provider: {
                                                type: string;
                                            };
                                            createdAt: {
                                                type: string;
                                                format: string;
                                            };
                                            updatedAt: {
                                                type: string;
                                                format: string;
                                            };
                                        };
                                        accountId: {
                                            type: string;
                                        };
                                        scopes: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/list-accounts";
};
declare const linkSocialAccount: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                scopes?: string[] | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            errorCallbackURL?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            redirect: boolean;
            status: boolean;
        } | {
            url: string;
            redirect: boolean;
        };
    } : {
        redirect: boolean;
        status: boolean;
    } | {
        url: string;
        redirect: boolean;
    }>;
    options: {
        method: "POST";
        requireHeaders: true;
        body: z.ZodObject<{
            /**
             * Callback URL to redirect to after the user has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use
             */
            provider: z.ZodType<"apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom", z.ZodTypeDef, "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom">;
            /**
             * ID Token for direct authentication without redirect
             */
            idToken: z.ZodOptional<z.ZodObject<{
                token: z.ZodString;
                nonce: z.ZodOptional<z.ZodString>;
                accessToken: z.ZodOptional<z.ZodString>;
                refreshToken: z.ZodOptional<z.ZodString>;
                scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                token: string;
                scopes?: string[] | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }, {
                token: string;
                scopes?: string[] | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }>>;
            /**
             * Whether to allow sign up for new users
             */
            requestSignUp: z.ZodOptional<z.ZodBoolean>;
            /**
             * Additional scopes to request when linking the account.
             * This is useful for requesting additional permissions when
             * linking a social account compared to the initial authentication.
             */
            scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            /**
             * The URL to redirect to if there is an error during the link process.
             */
            errorCallbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                scopes?: string[] | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            errorCallbackURL?: string | undefined;
        }, {
            provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
            scopes?: string[] | undefined;
            callbackURL?: string | undefined;
            requestSignUp?: boolean | undefined;
            idToken?: {
                token: string;
                scopes?: string[] | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            errorCallbackURL?: string | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        url: {
                                            type: string;
                                            description: string;
                                        };
                                        redirect: {
                                            type: string;
                                            description: string;
                                        };
                                        status: {
                                            type: string;
                                        };
                                    };
                                    required: string[];
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/link-social";
};
declare const unlinkAccount: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            providerId: string;
            accountId?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            status: boolean;
        };
    } : {
        status: boolean;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            providerId: z.ZodString;
            accountId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            providerId: string;
            accountId?: string | undefined;
        }, {
            providerId: string;
            accountId?: string | undefined;
        }>;
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        status: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/unlink-account";
};
declare const getAccessToken: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            accessToken: string | undefined;
            accessTokenExpiresAt: Date | undefined;
            scopes: string[];
            idToken: string | undefined;
        };
    } : {
        accessToken: string | undefined;
        accessTokenExpiresAt: Date | undefined;
        scopes: string[];
        idToken: string | undefined;
    }>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            providerId: z.ZodString;
            accountId: z.ZodOptional<z.ZodString>;
            userId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        }, {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        tokenType: {
                                            type: string;
                                        };
                                        idToken: {
                                            type: string;
                                        };
                                        accessToken: {
                                            type: string;
                                        };
                                        refreshToken: {
                                            type: string;
                                        };
                                        accessTokenExpiresAt: {
                                            type: string;
                                            format: string;
                                        };
                                        refreshTokenExpiresAt: {
                                            type: string;
                                            format: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/get-access-token";
};
declare const refreshToken: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: OAuth2Tokens;
    } : OAuth2Tokens>;
    options: {
        method: "POST";
        body: z.ZodObject<{
            providerId: z.ZodString;
            accountId: z.ZodOptional<z.ZodString>;
            userId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        }, {
            providerId: string;
            userId?: string | undefined;
            accountId?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        tokenType: {
                                            type: string;
                                        };
                                        idToken: {
                                            type: string;
                                        };
                                        accessToken: {
                                            type: string;
                                        };
                                        refreshToken: {
                                            type: string;
                                        };
                                        accessTokenExpiresAt: {
                                            type: string;
                                            format: string;
                                        };
                                        refreshTokenExpiresAt: {
                                            type: string;
                                            format: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                };
            };
        };
    } & {
        use: any[];
    };
    path: "/refresh-token";
};
declare const accountInfo: {
    <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
        body: {
            accountId: string;
        };
    } & {
        method?: "POST" | undefined;
    } & {
        query?: Record<string, any> | undefined;
    } & {
        params?: Record<string, any>;
    } & {
        request?: Request;
    } & {
        headers?: HeadersInit;
    } & {
        asResponse?: boolean;
        returnHeaders?: boolean;
        use?: better_call.Middleware[];
        path?: string;
    } & {
        asResponse?: AsResponse | undefined;
        returnHeaders?: ReturnHeaders | undefined;
    }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
        headers: Headers;
        response: {
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
            };
            data: Record<string, any>;
        } | null;
    } : {
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
        };
        data: Record<string, any>;
    } | null>;
    options: {
        method: "POST";
        use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
            session: {
                session: Record<string, any> & {
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: Record<string, any> & {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                };
            };
        }>)[];
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                name: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                image: {
                                                    type: string;
                                                };
                                                emailVerified: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                        data: {
                                            type: string;
                                            properties: {};
                                            additionalProperties: boolean;
                                        };
                                    };
                                    required: string[];
                                    additionalProperties: boolean;
                                };
                            };
                        };
                    };
                };
            };
        };
        body: z.ZodObject<{
            accountId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            accountId: string;
        }, {
            accountId: string;
        }>;
    } & {
        use: any[];
    };
    path: "/account-info";
};

/**
 * A middleware to validate callbackURL and origin against
 * trustedOrigins.
 */
declare const originCheckMiddleware: (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;
declare const originCheck: (getValue: (ctx: GenericEndpointContext) => string | string[]) => (inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>;

declare function getEndpoints<C extends AuthContext, Option extends BetterAuthOptions>(ctx: Promise<C> | C, options: Option): {
    api: {
        ok: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {}), zod.ZodTypeDef, "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {})>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    loginHint: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        operationId: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                    url: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    user: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            email: {
                                                                type: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            image: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            emailVerified: {
                                                                type: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                } | undefined;
            } & {
                method: "POST" | "GET";
            } & {
                query?: {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                } | undefined;
            } & {
                params: {
                    id: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("POST" | "GET")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        token: string;
                        expiresAt: Date;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        image?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    token: string;
                    expiresAt: Date;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/sign-up/email", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                url: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        image: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: {
                    token?: string | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        parameters: ({
                            name: string;
                            in: "query";
                            description: string;
                            required: true;
                            schema: {
                                type: "string";
                            };
                        } | {
                            name: string;
                            in: "query";
                            description: string;
                            required: false;
                            schema: {
                                type: "string";
                            };
                        })[];
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                                example: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                                example: string;
                                                nullable: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    example: boolean;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "400": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                    description: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    nullable: boolean;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/update-user", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<Option>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<Option>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                }, {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        requestPasswordReset: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/request-password-reset";
        };
        requestPasswordResetCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    token: string;
                    expiresAt: Date;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                token: string;
                expiresAt: Date;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    status: boolean;
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                status: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {}), zod.ZodTypeDef, "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {})>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    }, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    }>>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                    description: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                    description: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                accountId: {
                                                    type: string;
                                                };
                                                scopes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
        refreshToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: OAuth2Tokens;
            } : OAuth2Tokens>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/refresh-token";
        };
        getAccessToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    accessToken: string | undefined;
                    accessTokenExpiresAt: Date | undefined;
                    scopes: string[];
                    idToken: string | undefined;
                };
            } : {
                accessToken: string | undefined;
                accessTokenExpiresAt: Date | undefined;
                scopes: string[];
                idToken: string | undefined;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-access-token";
        };
        accountInfo: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    accountId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    };
                    data: Record<string, any>;
                } | null;
            } : {
                user: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                };
                data: Record<string, any>;
            } | null>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                data: {
                                                    type: string;
                                                    properties: {};
                                                    additionalProperties: boolean;
                                                };
                                            };
                                            required: string[];
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                body: zod.ZodObject<{
                    accountId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    accountId: string;
                }, {
                    accountId: string;
                }>;
            } & {
                use: any[];
            };
            path: "/account-info";
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
    middlewares: {
        path: string;
        middleware: any;
    }[];
};
declare const router: <C extends AuthContext, Option extends BetterAuthOptions>(ctx: C, options: Option) => {
    handler: (request: Request) => Promise<Response>;
    endpoints: {
        ok: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {}), zod.ZodTypeDef, "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {})>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    }, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    loginHint: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        expiresAt?: number | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                    loginHint?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        operationId: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                    url: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    user: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            email: {
                                                                type: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            image: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            emailVerified: {
                                                                type: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                } | undefined;
            } & {
                method: "POST" | "GET";
            } & {
                query?: {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                } | undefined;
            } & {
                params: {
                    id: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("POST" | "GET")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    user?: string | undefined;
                    error?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        token: string;
                        expiresAt: Date;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        userId: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        email: string;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        image?: string | null | undefined;
                    } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    token: string;
                    expiresAt: Date;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/sign-up/email", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<Option, "user", "input"> & InferFieldsFromOptions<Option, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                url: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        image: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: {
                    token?: string | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        parameters: ({
                            name: string;
                            in: "query";
                            description: string;
                            required: true;
                            schema: {
                                type: "string";
                            };
                        } | {
                            name: string;
                            in: "query";
                            description: string;
                            required: false;
                            schema: {
                                type: "string";
                            };
                        })[];
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                                example: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                                example: string;
                                                nullable: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    example: boolean;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "400": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                    description: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    nullable: boolean;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/update-user", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<Option>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<Option>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<Option>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                }, {
                    callbackURL?: string | undefined;
                    token?: string | undefined;
                    password?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        requestPasswordReset: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/request-password-reset";
        };
        requestPasswordResetCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    token: string;
                    expiresAt: Date;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                token: string;
                expiresAt: Date;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    status: boolean;
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                status: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {}), zod.ZodTypeDef, "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {})>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    }, {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    }>>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom" | (string & {});
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    idToken?: {
                        token: string;
                        nonce?: string | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        scopes?: string[] | undefined;
                    } | undefined;
                    scopes?: string[] | undefined;
                    requestSignUp?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                    description: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                    description: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                accountId: {
                                                    type: string;
                                                };
                                                scopes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
        refreshToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: OAuth2Tokens;
            } : OAuth2Tokens>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/refresh-token";
        };
        getAccessToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    accessToken: string | undefined;
                    accessTokenExpiresAt: Date | undefined;
                    scopes: string[];
                    idToken: string | undefined;
                };
            } : {
                accessToken: string | undefined;
                accessTokenExpiresAt: Date | undefined;
                scopes: string[];
                idToken: string | undefined;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                    userId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-access-token";
        };
        accountInfo: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    accountId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    };
                    data: Record<string, any>;
                } | null;
            } : {
                user: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                };
                data: Record<string, any>;
            } | null>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            token: string;
                            expiresAt: Date;
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            createdAt: Date;
                            updatedAt: Date;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                data: {
                                                    type: string;
                                                    properties: {};
                                                    additionalProperties: boolean;
                                                };
                                            };
                                            required: string[];
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                body: zod.ZodObject<{
                    accountId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    accountId: string;
                }, {
                    accountId: string;
                }>;
            } & {
                use: any[];
            };
            path: "/account-info";
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
};

declare const BASE_ERROR_CODES: {
    USER_NOT_FOUND: string;
    FAILED_TO_CREATE_USER: string;
    FAILED_TO_CREATE_SESSION: string;
    FAILED_TO_UPDATE_USER: string;
    FAILED_TO_GET_SESSION: string;
    INVALID_PASSWORD: string;
    INVALID_EMAIL: string;
    INVALID_EMAIL_OR_PASSWORD: string;
    SOCIAL_ACCOUNT_ALREADY_LINKED: string;
    PROVIDER_NOT_FOUND: string;
    INVALID_TOKEN: string;
    ID_TOKEN_NOT_SUPPORTED: string;
    FAILED_TO_GET_USER_INFO: string;
    USER_EMAIL_NOT_FOUND: string;
    EMAIL_NOT_VERIFIED: string;
    PASSWORD_TOO_SHORT: string;
    PASSWORD_TOO_LONG: string;
    USER_ALREADY_EXISTS: string;
    EMAIL_CAN_NOT_BE_UPDATED: string;
    CREDENTIAL_ACCOUNT_NOT_FOUND: string;
    SESSION_EXPIRED: string;
    FAILED_TO_UNLINK_LAST_ACCOUNT: string;
    ACCOUNT_NOT_FOUND: string;
    USER_ALREADY_HAS_PASSWORD: string;
};

type WithJsDoc<T, D> = Expand<T & D>;
declare const betterAuth: <O extends BetterAuthOptions>(options: O & Record<never, never>) => {
    handler: (request: Request) => Promise<Response>;
    api: InferAPI<{
        ok: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    ok: boolean;
                };
            } : {
                ok: boolean;
            }>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                ok: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/ok";
        };
        error: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Response;
            } : Response>;
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/error";
        };
        signInSocial: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                token: string;
                url: undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom", zod.ZodTypeDef, "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom">;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    loginHint: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    loginHint?: string | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        operationId: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                    url: {
                                                        type: string;
                                                        nullable: boolean;
                                                    };
                                                    user: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            email: {
                                                                type: string;
                                                            };
                                                            name: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            image: {
                                                                type: string;
                                                                nullable: boolean;
                                                            };
                                                            emailVerified: {
                                                                type: string;
                                                            };
                                                            createdAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                            updatedAt: {
                                                                type: string;
                                                                format: string;
                                                            };
                                                        };
                                                        required: string[];
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/social";
        };
        callbackOAuth: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                method: "GET" | "POST";
            } & {
                query?: {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                } | undefined;
            } & {
                params: {
                    id: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void;
            } : void>;
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    device_id: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                    user: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    code?: string | undefined;
                    state?: string | undefined;
                    error?: string | undefined;
                    user?: string | undefined;
                    device_id?: string | undefined;
                    error_description?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            } & {
                use: any[];
            };
            path: "/callback/:id";
        };
        getSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    session: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        userId: string;
                        expiresAt: Date;
                        createdAt: Date;
                        updatedAt: Date;
                        token: string;
                        ipAddress?: string | null | undefined;
                        userAgent?: string | null | undefined;
                    } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
                    user: UnionToIntersection<StripEmptyObjects<{
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        email: string;
                        emailVerified: boolean;
                        name: string;
                        image?: string | null | undefined;
                    } & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
                } | null;
            } : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    image?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
            } | null>;
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>>;
                    disableRefresh: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: string | boolean | undefined;
                }>>;
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-session";
        };
        signOut: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                };
            } : {
                success: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-out";
        };
        signUpEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/sign-up/email", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, {
                name: string;
                email: string;
                password: string;
                callbackURL?: string;
            } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                } | {
                    token: string;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } | {
                token: string;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                metadata: {
                    $Infer: {
                        body: {
                            name: string;
                            email: string;
                            password: string;
                            callbackURL?: string;
                        } & InferFieldsFromPlugins<O, "user", "input"> & InferFieldsFromOptions<O, "user", "input">;
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-up/email";
        };
        signInEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    token: string;
                    url: string | undefined;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                redirect: boolean;
                token: string;
                url: string | undefined;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    email: string;
                    password: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            properties: {
                                                redirect: {
                                                    type: string;
                                                    enum: boolean[];
                                                };
                                                token: {
                                                    type: string;
                                                    description: string;
                                                };
                                                url: {
                                                    type: string;
                                                    nullable: boolean;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        image: {
                                                            type: string;
                                                            nullable: boolean;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/sign-in/email";
        };
        forgetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/forget-password";
        };
        resetPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    token?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: {
                    token?: string | undefined;
                } | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                }, {
                    token?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password";
        };
        verifyEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: void | {
                    status: boolean;
                    user: {
                        id: any;
                        email: any;
                        name: any;
                        image: any;
                        emailVerified: any;
                        createdAt: any;
                        updatedAt: any;
                    };
                } | {
                    status: boolean;
                    user: null;
                };
            } : void | {
                status: boolean;
                user: {
                    id: any;
                    email: any;
                    name: any;
                    image: any;
                    emailVerified: any;
                    createdAt: any;
                    updatedAt: any;
                };
            } | {
                status: boolean;
                user: null;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        parameters: ({
                            name: string;
                            in: "query";
                            description: string;
                            required: true;
                            schema: {
                                type: "string";
                            };
                        } | {
                            name: string;
                            in: "query";
                            description: string;
                            required: false;
                            schema: {
                                type: "string";
                            };
                        })[];
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/verify-email";
        };
        sendVerificationEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                                example: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                                example: string;
                                                nullable: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                    example: boolean;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            "400": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                message: {
                                                    type: string;
                                                    description: string;
                                                    example: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/send-verification-email";
        };
        changeEmail: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newEmail: string;
                    callbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                    nullable: boolean;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-email";
        };
        changePassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    token: string | null;
                    user: {
                        id: string;
                        email: string;
                        name: string;
                        image: string | null | undefined;
                        emailVerified: boolean;
                        createdAt: Date;
                        updatedAt: Date;
                    };
                };
            } : {
                token: string | null;
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                    nullable: boolean;
                                                    description: string;
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            format: string;
                                                            nullable: boolean;
                                                            description: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        createdAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                        updatedAt: {
                                                            type: string;
                                                            format: string;
                                                            description: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/change-password";
        };
        setPassword: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    newPassword: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
            } & {
                use: any[];
            };
            path: "/set-password";
        };
        updateUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(...inputCtx: better_call.HasRequiredKeys<better_call.InputContext<"/update-user", {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<O>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }>> extends true ? [better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<O>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<O>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }] : [((better_call.InferBodyInput<{
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<O>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            }, Partial<AdditionalUserFieldsInput<O>> & {
                name?: string;
                image?: string;
            }> & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined)?]): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodRecord<zod.ZodString, zod.ZodAny>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    $Infer: {
                        body: Partial<AdditionalUserFieldsInput<O>> & {
                            name?: string;
                            image?: string;
                        };
                    };
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/update-user";
        };
        deleteUser: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                    password?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                    password?: string | undefined;
                }, {
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                    password?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user";
        };
        forgetPasswordCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        requestPasswordReset: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    email: string;
                    redirectTo?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/request-password-reset";
        };
        requestPasswordResetCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    callbackURL: string;
                };
            } & {
                params: {
                    token: string;
                };
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: never;
            } : never>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/reset-password/:token";
        };
        listSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: Prettify<UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    userId: string;
                    expiresAt: Date;
                    createdAt: Date;
                    updatedAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>>[];
            } : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                userId: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>>[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-sessions";
        };
        revokeSession: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    token: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-session";
        };
        revokeSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-sessions";
        };
        revokeOtherSessions: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/revoke-other-sessions";
        };
        linkSocialAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        scopes?: string[] | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    errorCallbackURL?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    redirect: boolean;
                    status: boolean;
                } | {
                    url: string;
                    redirect: boolean;
                };
            } : {
                redirect: boolean;
                status: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            options: {
                method: "POST";
                requireHeaders: true;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodType<"apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom", zod.ZodTypeDef, "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom">;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        scopes?: string[] | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        scopes?: string[] | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                    requestSignUp: zod.ZodOptional<zod.ZodBoolean>;
                    scopes: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        scopes?: string[] | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    errorCallbackURL?: string | undefined;
                }, {
                    provider: "apple" | (string & {}) | "discord" | "facebook" | "github" | "microsoft" | "google" | "huggingface" | "spotify" | "twitch" | "twitter" | "dropbox" | "kick" | "linkedin" | "gitlab" | "tiktok" | "reddit" | "roblox" | "vk" | "zoom";
                    scopes?: string[] | undefined;
                    callbackURL?: string | undefined;
                    requestSignUp?: boolean | undefined;
                    idToken?: {
                        token: string;
                        scopes?: string[] | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    errorCallbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                    description: string;
                                                };
                                                redirect: {
                                                    type: string;
                                                    description: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/link-social";
        };
        listUserAccounts: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0?: ({
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }) | undefined): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    id: string;
                    provider: string;
                    createdAt: Date;
                    updatedAt: Date;
                    accountId: string;
                    scopes: string[];
                }[];
            } : {
                id: string;
                provider: string;
                createdAt: Date;
                updatedAt: Date;
                accountId: string;
                scopes: string[];
            }[]>;
            options: {
                method: "GET";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
                                                        type: string;
                                                    };
                                                    createdAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                    updatedAt: {
                                                        type: string;
                                                        format: string;
                                                    };
                                                };
                                                accountId: {
                                                    type: string;
                                                };
                                                scopes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/list-accounts";
        };
        deleteUserCallback: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body?: undefined;
            } & {
                method?: "GET" | undefined;
            } & {
                query: {
                    token: string;
                    callbackURL?: string | undefined;
                };
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    success: boolean;
                    message: string;
                };
            } : {
                success: boolean;
                message: string;
            }>;
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                    description: string;
                                                };
                                                message: {
                                                    type: string;
                                                    enum: string[];
                                                    description: string;
                                                };
                                            };
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/delete-user/callback";
        };
        unlinkAccount: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    status: boolean;
                };
            } : {
                status: boolean;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    accountId?: string | undefined;
                }>;
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                status: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/unlink-account";
        };
        refreshToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: OAuth2Tokens;
            } : OAuth2Tokens>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/refresh-token";
        };
        getAccessToken: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    accessToken: string | undefined;
                    accessTokenExpiresAt: Date | undefined;
                    scopes: string[];
                    idToken: string | undefined;
                };
            } : {
                accessToken: string | undefined;
                accessTokenExpiresAt: Date | undefined;
                scopes: string[];
                idToken: string | undefined;
            }>;
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    providerId: zod.ZodString;
                    accountId: zod.ZodOptional<zod.ZodString>;
                    userId: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                }, {
                    providerId: string;
                    userId?: string | undefined;
                    accountId?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                tokenType: {
                                                    type: string;
                                                };
                                                idToken: {
                                                    type: string;
                                                };
                                                accessToken: {
                                                    type: string;
                                                };
                                                refreshToken: {
                                                    type: string;
                                                };
                                                accessTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                                refreshTokenExpiresAt: {
                                                    type: string;
                                                    format: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            } & {
                use: any[];
            };
            path: "/get-access-token";
        };
        accountInfo: {
            <AsResponse extends boolean = false, ReturnHeaders extends boolean = false>(inputCtx_0: {
                body: {
                    accountId: string;
                };
            } & {
                method?: "POST" | undefined;
            } & {
                query?: Record<string, any> | undefined;
            } & {
                params?: Record<string, any>;
            } & {
                request?: Request;
            } & {
                headers?: HeadersInit;
            } & {
                asResponse?: boolean;
                returnHeaders?: boolean;
                use?: better_call.Middleware[];
                path?: string;
            } & {
                asResponse?: AsResponse | undefined;
                returnHeaders?: ReturnHeaders | undefined;
            }): Promise<[AsResponse] extends [true] ? Response : [ReturnHeaders] extends [true] ? {
                headers: Headers;
                response: {
                    user: {
                        id: string;
                        name?: string;
                        email?: string | null;
                        image?: string;
                        emailVerified: boolean;
                    };
                    data: Record<string, any>;
                } | null;
            } : {
                user: {
                    id: string;
                    name?: string;
                    email?: string | null;
                    image?: string;
                    emailVerified: boolean;
                };
                data: Record<string, any>;
            } | null>;
            options: {
                method: "POST";
                use: ((inputContext: better_call.MiddlewareInputContext<better_call.MiddlewareOptions>) => Promise<{
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            expiresAt: Date;
                            createdAt: Date;
                            updatedAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        email: {
                                                            type: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                        };
                                                        emailVerified: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
                                                };
                                                data: {
                                                    type: string;
                                                    properties: {};
                                                    additionalProperties: boolean;
                                                };
                                            };
                                            required: string[];
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                body: zod.ZodObject<{
                    accountId: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    accountId: string;
                }, {
                    accountId: string;
                }>;
            } & {
                use: any[];
            };
            path: "/account-info";
        };
    } & UnionToIntersection<O["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>>;
    options: O;
    $context: Promise<AuthContext>;
    $Infer: {
        Session: {
            session: PrettifyDeep<InferSession<O>>;
            user: PrettifyDeep<InferUser<O>>;
        };
    } & InferPluginTypes<O>;
    $ERROR_CODES: InferPluginErrorCodes<O> & typeof BASE_ERROR_CODES;
};
type Auth = {
    handler: (request: Request) => Promise<Response>;
    api: FilterActions<ReturnType<typeof router>["endpoints"]>;
    options: BetterAuthOptions;
    $ERROR_CODES: typeof BASE_ERROR_CODES;
    $context: Promise<AuthContext>;
};

export { shouldPublishLog as $, init as J, levels as _, apple as a$, createLogger as a2, logger as a3, createInternalAdapter as a8, createCookieGetter as aA, getCookies as aB, setCookieCache as aD, setSessionCookie as aE, deleteSessionCookie as aF, parseCookies as aG, getSessionCookie as aI, getCookieCache as aJ, parseSetCookieHeader as aK, setCookieToHeader as aL, socialProviders as aM, socialProviderList as aN, SocialProviderListEnum as aO, github as aU, google as aX, createFieldAttribute as ab, getAuthTables as ak, accountSchema as al, userSchema as am, sessionSchema as an, verificationSchema as ao, parseOutputData as ap, getAllFields as aq, parseUserOutput as ar, parseAccountOutput as as, parseSessionOutput as at, parseInputData as au, parseUserInput as av, parseAdditionalUserInput as aw, parseAccountInput as ax, parseSessionInput as ay, mergeSchema as az, freshSessionMiddleware as b$, getApplePublicKey as b0, microsoft as b3, discord as b6, spotify as b9, roblox as bA, LANG as bC, vk as bE, zoom as bL, kick as bO, huggingface as bR, getEndpoints as bS, router as bT, signInSocial as bU, signInEmail as bV, callbackOAuth as bW, getSession as bX, getSessionFromCtx as bY, sessionMiddleware as bZ, requestOnlySessionMiddleware as b_, twitch as bc, facebook as bf, twitter as bi, dropbox as bl, linkedin as bo, gitlab as br, tiktok as bu, reddit as bx, listSessions as c0, revokeSession as c1, revokeSessions as c2, revokeOtherSessions as c3, signOut as c4, requestPasswordReset as c5, forgetPassword as c6, requestPasswordResetCallback as c7, forgetPasswordCallback as c8, resetPassword as c9, createEmailVerificationToken as ca, sendVerificationEmailFn as cb, sendVerificationEmail as cc, verifyEmail as cd, updateUser as ce, changePassword as cf, setPassword as cg, deleteUser as ch, deleteUserCallback as ci, changeEmail as cj, error as ck, ok as cl, signUpEmail as cm, listUserAccounts as cn, linkSocialAccount as co, unlinkAccount as cp, getAccessToken as cq, refreshToken as cr, accountInfo as cs, originCheckMiddleware as ct, originCheck as cu, BASE_ERROR_CODES as f, createAuthMiddleware as j, createAuthEndpoint as k, optionsMiddleware as o, checkPassword as u, betterAuth as w };
export type { AdapterDebugLogs as A, BetterAuthOptions as B, CreateCustomAdapter as C, AdditionalSessionFieldsOutput as D, InferPluginTypes as E, Account as F, GenericEndpointContext as G, HookEndpointContext as H, InferOptionSchema as I, KyselyDatabaseType as K, AdapterSchemaCreation as L, Models as M, AdapterInstance as N, OAuthStatePayload as O, SecondaryStorage as P, FilteredAPI as Q, RateLimit as R, Session as S, FilterActions as T, User as U, Verification as V, Where as W, InferSessionAPI as X, InferAPI as Y, LogLevel as Z, Adapter as a, Logger as a0, LogHandlerParams as a1, ProviderOptions as a4, StateManagement as a5, FieldAttribute as a6, FieldType as a7, InternalAdapter as a9, BetterAuthCookies as aC, EligibleCookies as aH, SocialProvider as aP, SocialProviders as aQ, SocialProviderList as aR, GithubProfile as aS, GithubOptions as aT, GoogleProfile as aV, GoogleOptions as aW, AppleProfile as aY, AppleNonConformUser as aZ, AppleOptions as a_, FieldAttributeConfig as aa, InferValueType as ac, InferFieldsOutput as ad, InferFieldsInput as ae, InferFieldsInputClient as af, PluginFieldAttribute as ag, InferFieldsFromPlugins as ah, InferFieldsFromOptions as ai, BetterAuthDbSchema as aj, AdapterConfig as b, MicrosoftEntraIDProfile as b1, MicrosoftOptions as b2, DiscordProfile as b4, DiscordOptions as b5, SpotifyProfile as b7, SpotifyOptions as b8, VkProfile as bB, VkOption as bD, LoginType as bF, AccountStatus as bG, PronounOption as bH, PhoneNumber as bI, ZoomProfile as bJ, ZoomOptions as bK, KickProfile as bM, KickOptions as bN, HuggingFaceProfile as bP, HuggingFaceOptions as bQ, TwitchProfile as ba, TwitchOptions as bb, FacebookProfile as bd, FacebookOptions as be, TwitterProfile as bg, TwitterOption as bh, DropboxProfile as bj, DropboxOptions as bk, LinkedInProfile as bm, LinkedInOptions as bn, GitlabProfile as bp, GitlabOptions as bq, TiktokProfile as bs, TiktokOptions as bt, RedditProfile as bv, RedditOptions as bw, RobloxProfile as by, RobloxOptions as bz, CustomAdapter as c, CleanedWhere as d, AdapterTestDebugLogs as e, AuthPluginSchema as g, BetterAuthPlugin as h, InferPluginErrorCodes as i, AuthEndpoint as l, AuthMiddleware as m, Auth as n, AuthContext as p, OAuth2Tokens as q, OAuthProvider as r, InferUser as s, InferSession as t, WithJsDoc as v, AdditionalUserFieldsInput as x, AdditionalUserFieldsOutput as y, AdditionalSessionFieldsInput as z };
