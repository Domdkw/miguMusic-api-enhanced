import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const getUserBadge = async (pacmtoken: string) => {
    const res = await axios.get('https://app.c.nf.migu.cn/pc/open/api/member/icon/v1.0', {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
            "Referer": "https://music.migu.cn/",
            "channel": "014X031",
            "timestamp": Date.now().toString()
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
