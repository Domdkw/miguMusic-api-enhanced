import type { Hono } from 'hono';
import { searchSong } from '../modules/search';
import { searchAlbum } from '../modules/search_album';
import { searchSinger } from '../modules/search_singer';
import { searchConcert } from '../modules/search_concert';
import { getSearchHot } from '../modules/search_hot';
import { getSearchDefault } from '../modules/search_default';
import { searchVideo } from '../modules/search_video';
import { searchSuggest } from '../modules/search_suggest';
import { searchRbt } from '../modules/search_rbt';
import { searchTicket } from '../modules/search_ticket';
import { getSearchSingerTab } from '../modules/search_singerTab';
import { getSearchSingerTabList } from '../modules/search_singerTab_list';
import { searchLrc } from '../modules/search_lrc';


export default function (app: Hono) {
    app.get('/search', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchSong(text, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/search/singer', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchSinger(text, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/search/album', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const typeOrder = c.req.query('typeOrder') ?? 0;
        const data = await searchAlbum(text, Number(page), Number(typeOrder));
        return c.json({ success: true, ...data });
    });

    app.get('/search/hot', async (c) => {
        const data = await getSearchHot();
        return c.json({ success: true, ...data });
    });

    app.get('/search/default', async (c) => {
        const data = await getSearchDefault();
        return c.json({ success: true, ...data });
    });

    app.get('/search/video', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const typeOrder = c.req.query('typeOrder') ?? 0;
        const data = await searchVideo(text, Number(page), Number(typeOrder));
        return c.json({ success: true, ...data });
    });

    app.get('/search/suggest', async (c) => {
        const text = c.req.query('text') ?? '';
        const data = await searchSuggest(text);
        return c.json({ success: true, ...data });
    });

    app.get('/search/rbt', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchRbt(text, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/search/ticket', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchTicket(text, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/search/concert', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchConcert(text, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/search/singerTab', async (c) => {
        const data = await getSearchSingerTab();
        return c.json({ success: true, ...data });
    });

    app.get('/search/singerTab/list', async (c) => {
        const tab = c.req.query('tab') || '';
        const data = await getSearchSingerTabList(tab);
        return c.json({ success: true, ...data });
    });

    app.get('/search/lrc', async (c) => {
        const text = c.req.query('text') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await searchLrc(text, Number(page));
        return c.json({ success: true, ...data });
    });
}
