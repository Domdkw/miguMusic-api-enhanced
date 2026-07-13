import type { Hono } from 'hono';
import { getAlbumInfo } from '../modules/album_info';
import { getAlbumSong } from '../modules/album_song';

export default function (app: Hono) {
    app.get('/album/info', async (c) => {
        const albumId = c.req.query('albumId') ?? '';
        const data = await getAlbumInfo(albumId);
        return c.json({ success: true, ...data });
    });

    app.get('/album/song', async (c) => {
        const albumId = c.req.query('albumId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getAlbumSong(albumId, Number(page));
        return c.json({ success: true, ...data });
    });
}
