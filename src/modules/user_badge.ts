import { getSetCookieValue } from '../utils/setCookie';

export const getUserBadge = async (pacmtoken: string) => {
    const res = await fetch(`https://app.c.nf.migu.cn/pc/open/api/member/icon/v1.0`
        ,{
            method: 'GET',
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
                "Referer": "https://music.migu.cn/",
                "channel": "014X031",
                "timestamp": Date.now().toString()
            }
        }
    );

    const newPacmToken = getSetCookieValue(res.headers, 'pacmtoken');
    const data = await res.json();
    return { data, pacmtoken: newPacmToken };
};
