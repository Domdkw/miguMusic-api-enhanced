import { createStorage } from 'unstorage';
import dbDriver from "unstorage/drivers/db0";

import { getLibSqlDB, getBunDB } from "./sqlite";

export async function createUniversalStorage(runtimeKey: string, runtimeEnv?: any) {
    if (runtimeKey === 'bun') {
        // Bun 环境：使用内置 SQLite，无需原生依赖
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
