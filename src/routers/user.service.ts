import type { Hono } from 'hono';
import { getUserBadge } from '../modules/user_badge';
import { queryUserInfo } from '../modules/user_queryInfo';
import { getUserHomePage } from '../modules/user_homePage';
import { getTodayRecommend } from '../modules/user_recom_today';
import { getUserCollectList } from '../modules/user_collect_list';
import { getUserMyList } from '../modules/user_myList';
import { addUserCollect } from '../modules/user_collect_add';
import { removeUserCollect } from '../modules/user_collect_remove';
import { likeSong } from '../modules/user_like';
import { dislikeSong } from '../modules/user_dislike';
import { editUserMyList } from '../modules/user_myList_edit';
import { addUserMyList } from '../modules/user_myList_add';
import { removeUserMyList } from '../modules/user_myList_remove';

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
    
    app.get('/user/like', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const contentIds = c.req.query('contentIds') ?? '';
        const {data, newPacmToken} = await likeSong(pacmtoken, contentIds);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/dislike', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const contentId = c.req.query('contentId') ?? '';
        const {data, newPacmToken} = await dislikeSong(pacmtoken, contentId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/myList/add', async (c) => {
        const {data, newPacmToken} = await addUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('title') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/myList/remove', async (c) => {
        const {data, newPacmToken} = await removeUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('playlistId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/myList/edit', async (c) => {
        const {data, newPacmToken} = await editUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('title') ?? '',
            c.req.query('playlistId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
}
