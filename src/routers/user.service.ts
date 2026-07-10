import type { Hono } from 'hono';
import { getUserBadge } from '../modules/user_badge';
import { queryUserInfo } from '../modules/user_queryInfo';
import { getUserHomePage } from '../modules/user_homePage';
import { getTodayRecommend } from '../modules/user_recom_today';
import { getUserCollect } from '../modules/user_collect';
import { getUserMyList } from '../modules/user_myList';

export default function (app: Hono) {
    app.get('/user/badge', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const data = await getUserBadge(pacmtoken);
        return c.json({ success: true, data });
    });

    app.get('/user/info', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const data = await queryUserInfo(pacmtoken);
        return c.json({ success: true, data });
    });

    app.get('/user/homePage', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const data = await getUserHomePage(pacmtoken);
        return c.json({ success: true, data });
    });

    app.get('/user/recommend/today', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const data = await getTodayRecommend(pacmtoken);
        return c.json({ success: true, data });
    });

    app.get('/user/collect', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const data = await getUserCollect(pacmtoken, page, size);
        return c.json({ success: true, data });
    });

    app.get('/user/myList', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const queryType = Number(c.req.query('queryType') ?? 0);
        const data = await getUserMyList(pacmtoken, queryType, page, size);
        return c.json({ success: true, data });
    });
}
