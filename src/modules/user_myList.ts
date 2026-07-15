import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const getUserMyList = async (pacmtoken: string, queryType: number = 0, page: number = 1, size: number = 20) => {
    const res = await axios.get(`https://app.c.nf.migu.cn/user/h5/my-music-list/v1.0?queryType=${queryType}&pageNo=${page}&pageSize=${size}`, {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
