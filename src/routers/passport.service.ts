import type { Hono } from 'hono';
import { getPacmToken } from '../modules/passport_pacmtoken';
import { loginNP } from '../modules/login_np';
import { checkToken } from '../modules/passport_checkToken';

export default function (app: Hono) {
    app.get('/passport/getPacmToken', async (c) => {
        const token = c.req.query('token') ?? '';
        const type = c.req.query('type') ?? '2';
        const sourceId = c.req.query('sourceId') ?? '220029';
        const activityId = c.req.query('activityId') ?? 'MUSIC-WWW';
        const data = await getPacmToken(token, type, sourceId, activityId);
        if(data.body && data.body.error && data.body.error !== ''){
            return c.json({ success: false, error: data.body.error });
        }
        return c.json({ success: true, data});
    });

    app.get('/login/np', async (c) => {
        const username = c.req.query('username') ?? '';
        const password = c.req.query('password') ?? '';
        const isNeedPacm = c.req.query('isNeedPacm') ?? 'false';
        const authnData = await loginNP.authn(username, password);

        if(authnData.error && authnData.error !== ''){
            return c.json({ success: false, error: authnData.error });
        }
        
        // 检查是否需要pacmtoken
        if(isNeedPacm === 'false' || isNeedPacm === '0' || !isNeedPacm){
            return c.json({ success: true, data: authnData });
        }

        // 状态码为2000时,需要获取pacmtoken
        if(authnData.status !== '2000' && authnData.status !== 2000){
            return c.json({ success: false, error: authnData });
        }

        const token = authnData?.result?.token || '';
        const pacmtokenData = await getPacmToken(token);

        if(pacmtokenData.body && pacmtokenData.body.error && pacmtokenData.body.error !== ''){
            return c.json({ success: false, error: pacmtokenData.body.error });
        }
        return c.json({ success: true, data: pacmtokenData});
    });

    app.get('/passport/checkToken', async (c) => {
        const token = c.req.query('pacmtoken') ?? '';
        const data = await checkToken(token);
        const code = data.code?.toString() || '';
        if(code !== '000000'){
            return c.json({ success: false, error: data });
        }
        return c.json({ success: true, data});
    });
}
