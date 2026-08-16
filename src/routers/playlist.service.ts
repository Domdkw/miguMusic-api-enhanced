import type { Hono } from 'hono';
import { getPlaylistInfo } from '../modules/playlist_info';
import { getPlaylistSong } from '../modules/playlist_song';
import { getSquarePage } from '../modules/playlist_square_page';
import { getRadioSong } from '../modules/radio_song';
import { matchPlaylist } from '../modules/playlist_match';
import { getVipPlaylist } from '../modules/playlist_vip';
import { getSquareListByTag } from '../modules/playlist_square_listByTag';
import { getSquareRecommend } from '../modules/playlist_square_recommend';
import { getSquareTag } from '../modules/playlist_square_tag';

export default function (app: Hono) {
    app.get('/playlist/info', async (c) => {
        const playlistId = c.req.query('playlistId') ?? '';
        const data = await getPlaylistInfo(playlistId);
        return c.json({ success: true, ...data });
    });

    app.get('/playlist/song', async (c) => {
        const playlistId = c.req.query('playlistId') ?? '';
        const page = c.req.query('page') ?? 1;
        const size = c.req.query('size') ?? 20;
        const data = await getPlaylistSong(playlistId, Number(page), Number(size));
        return c.json({ success: true, ...data });
    });

    app.get('/playlist/square/page', async (c) => {
        const data = await getSquarePage();
        return c.json({ success: true, ...data });
    });

    app.get('/radio/song', async (c) => {
        const radioId = c.req.query('radioId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getRadioSong(radioId, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/playlist/match', async (c) => {
        const url = c.req.query('url') ?? '';
        const data = await matchPlaylist(url);
        return c.json({ success: true, ...data });
    });

    app.get('/playlist/vip', async (c) => {
        const size = c.req.query('size') ?? 20;
        const data = await getVipPlaylist(Number(size));
        return c.json({ success: true, ...data });
    });

    app.get('/playlist/square/listByTag', async (c) => {
        return c.json({ success: true, ...(await getSquareListByTag(
            c.req.query('tagId') ?? '',
            Number(c.req.query('page') ?? 1)
        ))});
    });

    app.get('/playlist/square/recommend', async (c) => 
        c.json({ success: true, ...(await getSquareRecommend())})
    );

    app.get('/playlist/square/tag', async (c) => 
        c.json({ success: true, ...(await getSquareTag(Boolean(c.req.query('needMoreTag'))))})
    );
}
