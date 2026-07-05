import { getSetCookieValue } from '../utils/setCookie';

export const getTodayRecommend = async (pacmtoken: string) => {
    const res = await fetch(`https://app.c.nf.migu.cn/pc/v1.0/template/todayRecommendList/release?actionId=1&index=1&templateVersion=5`
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
