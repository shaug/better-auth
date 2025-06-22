import { A as AdapterDebugLogs, B as BetterAuthOptions, a as Adapter } from '../../shared/better-auth.BnOObfXg.mjs';
import '../../shared/better-auth.Bi8FQwDD.mjs';
import 'zod';
import 'better-call';
import 'kysely';
import 'jose';
import 'better-sqlite3';
import 'bun:sqlite';

interface PrismaConfig {
    /**
     * Database provider.
     */
    provider: "sqlite" | "cockroachdb" | "mysql" | "postgresql" | "sqlserver" | "mongodb";
    /**
     * Enable debug logs for the adapter
     *
     * @default false
     */
    debugLogs?: AdapterDebugLogs;
    /**
     * Use plural table names
     *
     * @default false
     */
    usePlural?: boolean;
}
interface PrismaClient {
}
declare const prismaAdapter: (prisma: PrismaClient, config: PrismaConfig) => (options: BetterAuthOptions) => Adapter;

export { prismaAdapter };
export type { PrismaConfig };
