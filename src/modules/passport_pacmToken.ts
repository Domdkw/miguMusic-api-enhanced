import { h5fetch } from '../utils/h5fetch';

export const getPacmToken = async (
    token: string = '', 
    type: string = '2', 
    sourceId: string = '220029',
    activityId: string = 'MUSIC-WWW'
) => {
    const res = await fetch(
        `https://c.musicapp.migu.cn/user/h5/token-validate/v3.0?token=${token}&type=${type}&sourceId=${sourceId}&activityId=${activityId}`,
        {
            headers: {
                "Cookie": "idmpauth=true@passport.migu.cn", //?
                "Origin": "https://music.migu.cn",
                "Pragma": "no-cache",
                "Referer": "https://music.migu.cn/"
            },
            method:'GET',
        }
    );
    const headers = res.headers;
    // 获取 Set-Cookie 头部
    let cookie: string[] = [];

    // 优先使用 getSetCookie() 方法（如果可用）
    if (typeof (headers as any).getSetCookie === 'function') {
        cookie = (headers as any).getSetCookie() || [];
    } else {
        // 降级方案：使用 get('set-cookie')
        const setCookieHeader = headers.get('set-cookie');
        if (setCookieHeader) {
            // 多个 Set-Cookie 可能用逗号分隔，但也可能在响应头中分别设置
            cookie = setCookieHeader.split(',').map(c => c.trim());
        }
    }

    let pacmToken = '';

    cookie.forEach((item: string) => {
        if(item.includes('pacmtoken=')){
            pacmToken = item.split(';')[0];
            pacmToken = pacmToken.split('=')[1];
            return;
        }
    })
    const body = await res.json();
    return {pacmToken, cookie, body};
};
