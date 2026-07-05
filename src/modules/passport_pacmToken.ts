import { parseSetCookies, getCookieValue } from '../utils/setCookie';

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
                "Cookie": "idmpauth=true@passport.migu.cn",
                "Origin": "https://music.migu.cn",
                "Pragma": "no-cache",
                "Referer": "https://music.migu.cn/"
            },
            method:'GET',
        }
    );

    const cookie = parseSetCookies(res.headers);
    const pacmToken = getCookieValue(cookie, 'pacmtoken');
    const body = await res.json();
    return { pacmToken, cookie, body };
};
