import type { Hono } from 'hono';
import { getAlbumInfo } from '../modules/album_info';
import { getAlbumSong } from '../modules/album_song';
import { getDAlbumInfo } from '../modules/dalbum_info';
import { getDAlbumSong } from '../modules/dalbum_song';
import { getDAlbumPay } from '../modules/dalbum_pay';

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

    app.get('/dalbum/info', async (c) =>
        c.json({ success: true, ...(await getDAlbumInfo(c.req.query('dalbumId') ?? ''))})
    );

    app.get('/dalbum/song', async (c) =>
        c.json({ success: true, ...(await getDAlbumSong(c.req.query('dalbumId') ?? ''))})
    );

    app.get('/dalbum/pay', async (c) =>
        c.json({ success: true, ...(await getDAlbumPay(c.req.query('dalbumId') ?? ''))})
    );
}
