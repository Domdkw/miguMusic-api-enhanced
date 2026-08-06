import type { Hono } from 'hono';
import { getColumnInfo } from '../modules/column_info';
import { getNewSongList } from '../modules/column_newSong';
import { getNewCDList } from '../modules/column_newCD';
import { getRankIndex } from '../modules/rank_index';
import { getRankInfo } from '../modules/rank_info';
import { getPageInfo } from '../modules/page_view';
import { getPageTab } from '../modules/page_tab';


export default function (app: Hono) {
    app.get('/rank/index', async (c) => {
        const data = await getRankIndex();
        return c.json({ success: true, ...data });
    });

    app.get('/rank/info', async (c) => {
        const rankId = c.req.query('rankId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getRankInfo(rankId, Number(page));
        return c.json({ success: true, ...data });
    });
    
    app.get('/column/info', async (c) => {
        const columnId = c.req.query('columnId') ?? '';
        const data = await getColumnInfo(columnId);
        return c.json({ success: true, ...data });
    });

    app.get('/column/newSong', async (c) => {
        const data = await getNewSongList();
        return c.json({ success: true, ...data });
    });

    app.get('/column/newCD', async (c) => {
        const data = await getNewCDList();
        return c.json({ success: true, ...data });
    });

    app.get('/page/tab', async (c) => {
        const data = await getPageTab();
        return c.json({ success: true, ...data });
    });

    app.get('/page/view', async (c) => {
        const data = await getPageInfo(
            c.req.query('pageId') ?? '',
            c.req.query('sceneId') ?? ''
        );
        return c.json({ success: true, ...data });
    });
}
