import type { Hono } from 'hono';
import { getNinanSong, getNinanByDate, getNinanSignInfo, signNinan } from '../modules/ninan';
import { signAiBean, getAiBeanCount, getAiBeanSignStatus, redeemAiBean } from '../modules/ai-bean';

export default function (app: Hono) {
    app.get('/activity/ninan/song', async (c) =>
        c.json({ success: true, ...(await getNinanSong()) })
    );

    app.get('/activity/ninan/date', async (c) => 
        c.json({ success: true, ...(await getNinanByDate(c.req.query('date') ?? '')) })
    );

    app.get('/activity/ninan/sign/info', async (c) => {
        const {data, newPacmToken} = await getNinanSignInfo(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/activity/ninan/sign', async (c) => {
        const {data, newPacmToken} = await signNinan(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/activity/ai-bean/sign', async (c) => {
        const {data, newPacmToken} = await signAiBean(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/activity/ai-bean/count', async (c) => {
        const {data, newPacmToken} = await getAiBeanCount(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/activity/ai-bean/status', async (c) => {
        const {data, newPacmToken} = await getAiBeanSignStatus(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/activity/ai-bean/redeem', async (c) => {
        const {data, newPacmToken} = await redeemAiBean(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
}
