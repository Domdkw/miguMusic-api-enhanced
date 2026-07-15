import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const getTodayRecommend = async (pacmtoken: string) => {
    const res = await axios.get('https://app.c.nf.migu.cn/pc/v1.0/template/todayRecommendList/release?actionId=1&index=1&templateVersion=5', {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
