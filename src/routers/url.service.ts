import type { Hono } from 'hono';
import { getUrlV1 } from '../modules/url_v1';
import { getUrlV2 } from '../modules/url_v2';
import { getUrlH5V24 } from '../modules/url_h5v2.4';

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
        const resourceType = c.req.query('resourceType') || '2';
        const pacmtoken = c.req.query('pacmtoken') || '';
        const data = await getUrlV2(contentId, copyrightId, toneFlag, resourceType, pacmtoken);
        return c.json({ success: true, ...data });
    });

    app.get('/url/h5v2.4', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        const toneFlag = c.req.query('toneFlag') || 'PQ';
        const resourceType = c.req.query('resourceType') || '2';
        const data = await getUrlH5V24(contentId, copyrightId, toneFlag, resourceType);
        return c.json({ success: true, ...data });
    });
}
