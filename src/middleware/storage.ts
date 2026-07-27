import { createStorage } from 'unstorage';
import dbDriver from "unstorage/drivers/db0";
import cfKvDriver from "unstorage/drivers/cloudflare-kv-binding";
import denoKvDriver from "unstorage/drivers/deno-kv";

import { getLibSqlDB, getBunDB } from "./sqlite.js";

export async function createUniversalStorage(runtimeKey: string, runtimeEnv?: any) {
    // Cloudflare Workers 环境：使用 KV
    if (runtimeKey === 'workerd' && runtimeEnv?.URL_KV) {
        return createStorage({
            driver: cfKvDriver({
                binding: runtimeEnv.URL_KV,
            }),
        });
    }

    // Deno 环境：使用 Deno KV
    if (runtimeKey === 'deno') {
        return createStorage({
            driver: denoKvDriver({
                path: './url_kv.sqlite',
            }),
        });
    }

    // Bun 环境：使用内置 SQLite
    if (runtimeKey === 'bun') {
        const bunDB = await getBunDB();
        return createStorage({
            driver: dbDriver({
                database: bunDB,
                tableName: "urls",
            }),
        });
    }

    // 其他环境（Node.js 等）：使用 libSQL
    const libSqlDB = await getLibSqlDB();
    return createStorage({
        driver: dbDriver({
            database: libSqlDB,
            tableName: "urls",
        }),
    });
}
