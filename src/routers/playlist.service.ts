import type { Hono } from 'hono';
import { getPlaylistInfo } from '../modules/playlist_info';
import { getPlaylistSong } from '../modules/playlist_song';

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
}
