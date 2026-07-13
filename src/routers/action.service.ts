import type { Hono } from 'hono';
import { getNinanSong } from '../modules/ninan_song';
import { getNinanByDate } from '../modules/ninan_date';

export default function (app: Hono) {
    app.get('/ninan/song', async (c) => {
        const data = await getNinanSong();
        return c.json({ success: true, ...data });
    });

    app.get('/ninan/date', async (c) => {
        const date = c.req.query('date') ?? '';
        const data = await getNinanByDate(date);
        return c.json({ success: true, ...data });
    });
}
