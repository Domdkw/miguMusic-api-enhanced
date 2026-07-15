import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const queryUserInfo = async (pacmtoken: string) => {
    const res = await axios.get('https://app.c.nf.migu.cn/pc/user/h5/queryUserInfo/v1.0', {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
            "channel": "014X031",
            "Referer": "https://music.migu.cn/"
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
