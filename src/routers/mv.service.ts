import type { Hono } from 'hono';
import { getMvInfo } from '../modules/mv_info';
import { getMvHls } from '../modules/mv_hls';

export default function (app: Hono) {
    app.get('/mv/info', async (c) => {
        const mvIds = c.req.query('mvIds') ?? '';
        const needAbsoluteUrl = c.req.query('needAbsoluteUrl') === 'true';
        const data = await getMvInfo(mvIds, {
            needAbsoluteUrl,
        });
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
            size, 
            format, 
            needHttps
        );
        return c.json({ success: true, data });
    });
}
