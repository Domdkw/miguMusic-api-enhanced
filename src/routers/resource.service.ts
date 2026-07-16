import type { Hono } from 'hono';
import { checkCanListen } from '../modules/can-listen';
import { getComment } from '../modules/comment';
import { getOpNum } from '../modules/opNum';
import { getVersion } from '../modules/version';
import { getResourceInfo } from '../modules/resourceinfo';
import { getTicketInfo } from '../modules/ticket';


export default function (app: Hono) {
    app.post('/can-listen', async (c) => {
        try {
            const body = await c.req.json();
            const data = await checkCanListen(body);
            return c.json({ success: true, ...data });
        } catch (e) {
            return c.json({
                success: false,
                error: e instanceof Error ? e.message : String(e)
            }, 500);
        }
    });

    app.get('/comment', async (c) => {
        const resourceId = c.req.query('resourceId') ?? '';
        const resourceType = c.req.query('resourceType') ?? 2;
        const hotCommentStart = c.req.query('hotCommentStart') ?? 0;
        const size = c.req.query('size') ?? 10;
        const data = await getComment(
            resourceId,
            Number(resourceType),
            Number(size),
            Number(hotCommentStart),
        );
        return c.json({ success: true, ...data });
    });

    app.get('/opNum', async (c) => {
        const ids = c.req.query('ids') ?? '';
        const data = await getOpNum(ids);
        return c.json({ success: true, ...data });
    });

    app.get('/version', async (c) => {
        const channel = c.req.query('channel') ?? '0146921';
        const version = c.req.query('version') ?? '8.4.0';
        const ua = c.req.query('ua') ?? 'Android_migu';
        const data = await getVersion(channel, version, ua);
        return c.json({ success: true, ...data });
    });

    app.get('/resourceinfo', async (c) => {
        const resourceId = c.req.query('resourceId') ?? '';
        const copyrightId = c.req.query('copyrightId') ?? '';
        const resourceType = c.req.query('resourceType') ?? 2;
        const data = await getResourceInfo(resourceId, copyrightId, Number(resourceType));
        return c.json({ success: true, ...data });
    });

    app.get('/ticket', async (c) => {
        const page = c.req.query('page') ?? 1;
        const pageCount = c.req.query('pageCount') ?? 10;
        const data = await getTicketInfo(Number(page), Number(pageCount));
        return c.json({ success: true, ...data });
    });
}
