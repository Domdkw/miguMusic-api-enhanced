import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const getUserHomePage = async (pacmtoken: string) => {
    const res = await axios.get('https://app.c.nf.migu.cn/pc/user/home-page/v2.0', {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
