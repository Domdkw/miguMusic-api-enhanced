import type { Hono } from 'hono';
import { getMvInfo } from '../modules/mv_info';
import { getMvHls } from '../modules/mv_hls';
import { getMVRecommend } from '../modules/mv_recommend';

export default function (app: Hono) {
    app.get('/mv/info', async (c) => {
        const mvContentId = c.req.query('mvContentId') ?? '';
        const data = await getMvInfo(mvContentId);
        return c.json({ success: true, data });
    });

    app.get('/mv/hls', async (c) => {
        const mvContentId = c.req.query('mvContentId') ?? '';
        const mvCopyrightId = c.req.query('mvCopyrightId') ?? '';
        const url = c.req.query('url') ?? '';
        const size = c.req.query('size') ?? '';
        const format = c.req.query('format') ?? '050012'; //HQ
        const needHttps = c.req.query('needHttps') !== 'false';
        const data = await getMvHls(
            mvContentId, 
            mvCopyrightId, 
            url, 
            Number(size), 
            format, 
            needHttps
        );
        return c.json({ success: true, data });
    });

    app.get('/mv/recommend', async (c) => {
        const mvContentId = c.req.query('mvContentId') ?? '';
        const page = Number(c.req.query('page') ?? '1');
        const data = await getMVRecommend(mvContentId, page);
        return c.json({ success: true, data });
    });
}
