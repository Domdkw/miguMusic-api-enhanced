import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

export const getUserCollect = async (pacmtoken: string, page: number = 1, size: number = 20) => {
    const res = await axios.get(`https://app.c.nf.migu.cn/user/h5/user/collection/v1.0?pageNo=${page}&type=1&OPType=03&pageSize=${size}&resourceType=2021`, {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
