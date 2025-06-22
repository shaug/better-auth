import { a as Adapter, B as BetterAuthOptions, G as GenericEndpointContext, W as Where, a6 as FieldAttribute, a7 as FieldType, K as KyselyDatabaseType } from '../shared/better-auth.DnWmi_Df.js';
export { aj as BetterAuthDbSchema, aa as FieldAttributeConfig, ai as InferFieldsFromOptions, ah as InferFieldsFromPlugins, ae as InferFieldsInput, af as InferFieldsInputClient, ad as InferFieldsOutput, ac as InferValueType, a9 as InternalAdapter, ag as PluginFieldAttribute, al as accountSchema, ab as createFieldAttribute, a8 as createInternalAdapter, aq as getAllFields, ak as getAuthTables, az as mergeSchema, ax as parseAccountInput, as as parseAccountOutput, aw as parseAdditionalUserInput, au as parseInputData, ap as parseOutputData, ay as parseSessionInput, at as parseSessionOutput, av as parseUserInput, ar as parseUserOutput, an as sessionSchema, am as userSchema, ao as verificationSchema } from '../shared/better-auth.DnWmi_Df.js';
import { z } from 'zod';
import '../shared/better-auth.Bi8FQwDD.js';
import 'better-call';
import 'kysely';
import 'jose';
import 'better-sqlite3';
import 'bun:sqlite';

declare function getWithHooks(adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
}): {
    createWithHooks: <T extends Record<string, any>>(data: T, model: "user" | "session" | "account" | "verification", customCreateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "user" | "session" | "account" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
    updateManyWithHooks: <T extends Record<string, any>>(data: any, where: Where[], model: "user" | "session" | "account" | "verification", customUpdateFn?: {
        fn: (data: Record<string, any>) => void | Promise<any>;
        executeMainFn?: boolean;
    }, context?: GenericEndpointContext) => Promise<any>;
};

declare function toZodSchema(fields: Record<string, FieldAttribute>): z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;

declare function getAdapter(options: BetterAuthOptions): Promise<Adapter>;
declare function convertToDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T): T;
declare function convertFromDB<T extends Record<string, any>>(fields: Record<string, FieldAttribute>, values: T | null): T | null;

declare function matchType(columnDataType: string, fieldType: FieldType, dbType: KyselyDatabaseType): boolean;
declare function getMigrations(config: BetterAuthOptions): Promise<{
    toBeCreated: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    toBeAdded: {
        table: string;
        fields: Record<string, FieldAttribute>;
        order: number;
    }[];
    runMigrations: () => Promise<void>;
    compileMigrations: () => Promise<string>;
}>;

declare function getSchema(config: BetterAuthOptions): Record<string, {
    fields: Record<string, FieldAttribute>;
    order: number;
}>;

export { FieldAttribute, FieldType, convertFromDB, convertToDB, getAdapter, getMigrations, getSchema, getWithHooks, matchType, toZodSchema };
