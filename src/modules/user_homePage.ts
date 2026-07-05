import { getSetCookieValue } from '../utils/setCookie';

export const getUserHomePage = async (pacmtoken: string) => {
    const res = await fetch(`https://app.c.nf.migu.cn/pc/user/home-page/v2.0`
        ,{
            method: 'GET',
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
                //"channel": "014X031",
                //"Referer": `https://music.migu.cn/`
            }
        }
    );

    const newPacmToken = getSetCookieValue(res.headers, 'pacmtoken');
    const data = await res.json();
    return { data, pacmtoken: newPacmToken };
};
