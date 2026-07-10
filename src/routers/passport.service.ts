import type { Hono } from 'hono';
import { getPacmToken } from '../modules/passport_pacmToken';
import { checkToken } from '../modules/passport_checkToken';
import { loginSim } from '../modules/login_sim';

export default function (app: Hono) {
    app.get('/passport/getPacmToken', async (c) => {
        const token = c.req.query('token') ?? '';
        const type = c.req.query('type') ?? '2';
        const sourceId = c.req.query('sourceId') ?? '220029';
        const data = await getPacmToken(token, type, sourceId, 'MUSIC-WWW');
        if(data.body && data.body.error && data.body.error !== ''){
            return c.json({ success: false, error: data.body.error });
        }
        return c.json({ success: true, data});
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

    app.get('/login/sim/send', async(c) => {
        const phone = c.req.query('phone') ?? '';
        const data = await loginSim.simSend(phone);
        if(data.error && data.error !== ''){
            return c.json({ success: false, error: data.error });
        }
        
        return c.json({ success: true, data});
    })

    app.get('/login/sim/query', async (c) => {
        const sim_sessionid = c.req.query('sessionId') ?? '';
        const isNeedPacm = c.req.query('isNeedPacm') ?? 'false';
        const authnData = await loginSim.simQuery(sim_sessionid);
        console.log(authnData)

        if(authnData.error && authnData.error !== ''){
            return c.json({ success: false, error: authnData.body });
        }
        
        // 检查是否需要pacmtoken
        if(isNeedPacm === 'false' || isNeedPacm === '0' || !isNeedPacm){
            return c.json({ success: true, data: authnData });
        }

        const status = authnData?.status?.toString() || '';

        // 状态码为2000时,需要获取pacmtoken
        if(status !== '2000'){
            return c.json({ success: false, error: `状态码错误: ${status}` });
        }

        const token = authnData?.token || '';
        const pacmtokenData = await getPacmToken(token);

        if(pacmtokenData.body && pacmtokenData.body.error && pacmtokenData.body.error !== ''){
            return c.json({ success: false, error: pacmtokenData.body.error });
        }
        return c.json({ success: true, data: pacmtokenData});
    });

}
