import type { Hono } from 'hono';
import { getSVideoInfo } from '../modules/svideo_info';
import { searchSVideo } from '../modules/svideo_search';
import { getSVideoSearchSuggest } from '../modules/svideo_searchSuggest';
import { getSVideoUrl } from '../modules/svideo_url';
import { getSVideoUserContent } from '../modules/svideo_userContent';
import { getVrbtOpNum } from '../modules/vrbt_opNum';
import { getVrbtUrl } from '../modules/vrbt_url';
import { getSVideoUserInfo } from '../modules/svideo_userInfo';

export default function (app: Hono) {
    app.get('/svideo/info', async (c) => {
        const contentIds = c.req.query('contentIds') ?? '';
        const data = await getSVideoInfo(contentIds);
        return c.json({ success: true, ...data });
    });

    app.get('/svideo/search', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchSVideo(text, Number(page));
        return c.json({ success: true, ...data });
    });
    
    app.get('/svideo/search/suggest', async (c) => {
        const text = c.req.query('text') ?? '';
        const data = await getSVideoSearchSuggest(text);
        return c.json({ success: true, ...data });
    });

    app.get('/svideo/url', async (c) => {
        const contentIds = c.req.query('contentIds') ?? '';
        const formatType = c.req.query('formatType') ?? 'HQ';
        const data = await getSVideoUrl(contentIds, formatType);
        return c.json({ success: true, ...data });
    });

    app.get('/svideo/userContent', async (c) => {
        const videoUserId = c.req.query('videoUserId') ?? '';
        const nextPageId = c.req.query('nextPageId') ?? '';
        const data = await getSVideoUserContent(videoUserId, nextPageId);
        return c.json({ success: true, ...data });
    });

    app.get('/svideo/userInfo', async (c) => {
        const type = c.req.query('type') ?? 'videoUserId';
        const uid = c.req.query('uid') ?? '';
        const videoUserId = c.req.query('videoUserId') ?? '';
        const data = await getSVideoUserInfo(type, uid, videoUserId);
        return c.json({ success: true, ...data });
    });

    app.get('/vrbt/opNum', async (c) => {
        const contentIds = c.req.query('contentIds') ?? '';
        const data = await getVrbtOpNum(contentIds);
        return c.json({ success: true, ...data });
    });

    app.get('/vrbt/url', async (c) => {
        const contentIds = c.req.query('contentIds') ?? '';
        const data = await getVrbtUrl(contentIds);
        return c.json({ success: true, ...data });
    });
}
