import { createDatabase } from "db0";

let _bunDB: ReturnType<typeof createDatabase> | null = null;
let _libSqlDB: ReturnType<typeof createDatabase> | null = null;

export async function getBunDB() {
    if (!_bunDB) {
        const bunSqlite = await import("db0/connectors/bun-sqlite");
        _bunDB = createDatabase(
            bunSqlite.default({
                cwd: "./sql",
                path: "./url.sqlite.db",
            })
        );
    }
    return _bunDB;
}

export async function getLibSqlDB() {
    if (!_libSqlDB) {
        const libSql = await import("db0/connectors/libsql/node");
        _libSqlDB = createDatabase(
            libSql.default({
                url: `file:./sql/url.sqlite.db`
            })
        );
    }
    return _libSqlDB;
}