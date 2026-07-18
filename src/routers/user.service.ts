import type { Hono } from 'hono';
import { getUserBadge } from '../modules/user_badge';
import { queryUserInfo } from '../modules/user_queryInfo';
import { getUserHomePage } from '../modules/user_homePage';
import { getTodayRecommend } from '../modules/user_recom_today';
import { getUserCollectList } from '../modules/user_collect_list';
import { getUserMyList } from '../modules/user_myList';
import { addUserCollect } from '../modules/user_collect_add';
import { removeUserCollect } from '../modules/user_collect_remove';

export default function (app: Hono) {
    app.get('/user/badge', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getUserBadge(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/info', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await queryUserInfo(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/homePage', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getUserHomePage(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/recommend/today', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getTodayRecommend(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/myList', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const queryType = Number(c.req.query('queryType') ?? 0);
        const {data, newPacmToken} = await getUserMyList(pacmtoken, queryType, page, size);
        return c.json({ success: true, ...data, pacmtoken:newPacmToken });
    });

    app.get('/user/collect/list', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const {data, newPacmToken} = await getUserCollectList(pacmtoken, page, size);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/collect/add', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const playlistId = c.req.query('playlistId') ?? '';
        const title = c.req.query('title') ?? '';
        const {data, newPacmToken} = await addUserCollect(pacmtoken, playlistId, title);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/collect/remove', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const playlistId = c.req.query('playlistId') ?? '';
        const {data, newPacmToken} = await removeUserCollect(pacmtoken, playlistId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
}
