import type { Hono } from 'hono';
import { getMvInfo } from '../modules/mv_info';
import { getMvHls } from '../modules/mv_hls';
import { getMVRecommend } from '../modules/mv_recommend';
import { getConcertInfo } from '../modules/concert_info';
import { getConcertUrl } from '../modules/concert_url';
import { getConcertDetail } from '../modules/concert_detail';
import { getConcertComment } from '../modules/concert_comment';

export default function (app: Hono) {
    app.get('/mv/info', async (c) => {
        const mvContentId = c.req.query('mvContentId') ?? '';
        const data = await getMvInfo(mvContentId);
        return c.json({ success: true, ...data });
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
        return c.json({ success: true, ...data });
    });

    app.get('/mv/recommend', async (c) => {
        const mvContentId = c.req.query('mvContentId') ?? '';
        const page = Number(c.req.query('page') ?? '1');
        const data = await getMVRecommend(mvContentId, page);
        return c.json({ success: true, ...data });
    });

    app.get('/mv/concert/info', async (c) => {
        const concertId = c.req.query('concertId') ?? '';
        const data = await getConcertInfo(concertId);
        return c.json({ success: true, ...data });
    });

    app.get('/mv/concert/url', async (c) => {
        const concertId = c.req.query('concertId') ?? '';
        const liveId = c.req.query('liveId') ?? '';
        const rateLevel = c.req.query('rateLevel') ?? '';
        const data = await getConcertUrl(concertId, liveId, Number(rateLevel));
        return c.json({ success: true, ...data });
    });

    app.get('/mv/concert/detail', async (c) => {
        const concertId = c.req.query('concertId') ?? '';
        const data = await getConcertDetail(concertId);
        return c.json({ success: true, ...data });
    });

    app.get('/mv/concert/comment', async (c) => {
        const concertId = c.req.query('concertId') ?? '';
        const page = c.req.query('page') ?? '1';
        const size = c.req.query('size') ?? '20';
        const data = await getConcertComment(concertId, Number(page), Number(size));
        return c.json({ success: true, ...data });
    });
}
