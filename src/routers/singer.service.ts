import type { Hono } from 'hono';
import { getSingerAlbum } from '../modules/singer_album';
import { getSingerIndex } from '../modules/singer_index';
import { getSingerSong } from '../modules/singer_song';
import { getSingerSimilar } from '../modules/singer_similar';
import { getSingerLetter } from '../modules/singer_letter';
import { getSingerMv } from '../modules/singer_mv';

export default function (app: Hono) {
    app.get('/singer/album', async (c) =>
        c.json({ success: true, ...(await getSingerAlbum(c.req.query('singerId') ?? ''))})
    );

    app.get('/singer/index', async (c) => 
        c.json({ success: true, ...(await getSingerIndex(c.req.query('singerId') ?? ''))})
    );

    app.get('/singer/song', async (c) => {
        const singerId = c.req.query('singerId') ?? '';
        const page = c.req.query('page') ?? 1;
        const data = await getSingerSong(singerId, Number(page));
        return c.json({ success: true, ...data });
    });

    app.get('/singer/similar', async (c) =>
        c.json({ success: true, ...(await getSingerSimilar(c.req.query('singerId') ?? ''))})
    );

    app.get('/singer/letter', async (c) =>
        c.json({ success: true, ...(await getSingerLetter(
            c.req.query('singerId') ?? '',
            c.req.query('pageId') ?? ''
        ))})
    );

    app.get('/singer/mv', async (c) =>
        c.json({ success: true, ...(await getSingerMv(c.req.query('singerId') ?? ''))})
    );
}
