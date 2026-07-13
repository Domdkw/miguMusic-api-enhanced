import type { Hono } from 'hono';
import { getRecommendPlaylist } from '../modules/recommend_playlist';
import { getSceneRecommend } from '../modules/recommend_song';
import { getRadioRecommend } from '../modules/recommend_radio';
import { getSimilarSongRecommend } from '../modules/recommend_similarSong';

export default function (app: Hono) {
    app.get('/recommend/playlist', async (c) => {
        const data = await getRecommendPlaylist();
        return c.json({ success: true, ...data });
    });

    app.get('/recommend/song', async (c) => {
        const scene = c.req.query('scene') ?? 'TODAY_RECOMMEND';
        const size = c.req.query('size') ?? 10;
        const data = await getSceneRecommend( String(scene), Number(size));
        return c.json({ success: true, ...data });
    });

    app.get('/recommend/radio', async (c) => {
        const type = c.req.query('type') ?? 1;
        const data = await getRadioRecommend(Number(type));
        return c.json({ success: true, ...data });
    });

    app.get('/recommend/similarSong', async (c) => {
        const contentId = c.req.query('contentId') ?? '';
        const data = await getSimilarSongRecommend(contentId);
        return c.json({ success: true, ...data });
    });
}
