import type { Hono } from 'hono';
import { getSingerAlbum } from '../modules/singer_album';
import { getSingerIndex } from '../modules/singer_index';
import { getSingerSong } from '../modules/singer_song';

export default function (app: Hono) {
    app.get('/singer/album', async (c) => {
        const singerId = c.req.query('singerId') ?? '';
        const data = await getSingerAlbum(singerId);
        return c.json({ success: true, data });
    });

    app.get('/singer/index', async (c) => {
        const singerId = c.req.query('singerId') ?? '';
        const data = await getSingerIndex(singerId);
        return c.json({ success: true, data });
    });

    app.get('/singer/song', async (c) => {
        const singerId = c.req.query('singerId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getSingerSong(singerId, Number(page));
        return c.json({ success: true, data });
    });
}
