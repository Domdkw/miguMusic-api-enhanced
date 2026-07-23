import type { Hono } from 'hono';
import { getUrlV1 } from '../modules/url_v1';
import { getUrlV2 } from '../modules/url_v2';
import { getUrlH5V24 } from '../modules/url_h5v2.4';

import { saveUrlToDB, getUrlFromDB } from '../middleware/urlSaver';
import { env } from 'hono/adapter';


export default function (app: Hono) {
    app.get('/url/v1', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        const resourceType = c.req.query('resourceType') || '2';
        const data = await getUrlV1(contentId, copyrightId, resourceType);
        return c.json({ success: true, ...data });
    });

    app.get('/url/v2', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        const toneFlag = c.req.query('toneFlag') || 'PQ';
        const pacmtoken = c.req.query('pacmtoken') || '';
        const data = await getUrlV2(contentId, copyrightId, toneFlag, pacmtoken);
        return c.json({ success: true, ...data });
    });

    app.get('/url/h5v2.4', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        const toneFlag = c.req.query('toneFlag') || 'PQ';
        const data = await getUrlH5V24(contentId, copyrightId, toneFlag);

        // 是否使用数据库
        const USE_DATABASE = env<{ USE_DATABASE: string }>(c).USE_DATABASE === 'true';
        if (USE_DATABASE) {
            const url = data?.data?.url || '';
            if (url !== '') {
                await saveUrlToDB(contentId, url);
            }
        }
        // ===END===

        return c.json({ success: true, ...data });
    });

    app.get('/url/db', async (c) => {

        // 是否使用数据库
        const USE_DATABASE = env<{ USE_DATABASE: string }>(c).USE_DATABASE === 'true';
        if (!USE_DATABASE) {
            return c.json({ success: false, error: '数据库未启用' }, 400);
        }
        // ===END===

        const contentId = c.req.query('contentId') || '';

        if (!contentId) {
            return c.json({ success: false, error: 'contentId 参数不能为空' }, 400);
        }

        const { success, url } = await getUrlFromDB(contentId);

        // 统一返回结构: { success: boolean, data?: { url: string }, error?: string }
        if (!success) {
            const data = await getUrlV1(contentId, '', '2');
            return c.json({ success: true, ...data, hit: false });
        }
        return c.json({ success: true, data: { url }, hit: true });
    });
}
