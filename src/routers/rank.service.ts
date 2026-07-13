import type { Hono } from 'hono';
import { getRankIndex } from '../modules/rank_index';
import { getRankInfo } from '../modules/rank_info';

export default function (app: Hono) {
    app.get('/rank/index', async (c) => {
        const data = await getRankIndex();
        return c.json({ success: true, ...data });
    });

    app.get('/rank/info', async (c) => {
        const rankId = c.req.query('rankId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getRankInfo(rankId, Number(page));
        return c.json({ success: true, ...data });
    });
}
