import { getSetCookieValue } from '../utils/setCookie';

export const queryUserInfo = async (pacmtoken: string) => {
    const res = await fetch(`https://app.c.nf.migu.cn/pc/user/h5/queryUserInfo/v1.0`
        ,{
            method: 'GET',
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
                "channel": "014X031",
                "Referer": `https://music.migu.cn/` //可不用
            }
        }
    );

    const newPacmToken = getSetCookieValue(res.headers, 'pacmtoken');
    const data = await res.json();
    return { data, pacmtoken: newPacmToken };
};
