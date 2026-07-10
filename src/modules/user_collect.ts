import { getSetCookieValue } from '../utils/setCookie';

export const getUserCollect = async (pacmtoken: string, page: number = 1, size: number = 20) => {
    const res = await fetch(`https://app.c.nf.migu.cn/user/h5/user/collection/v1.0?pageNo=${page}&type=1&OPType=03&pageSize=${size}&resourceType=2021`
        ,{
            method: 'GET',
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
            }
        }
    );

    const newPacmToken = getSetCookieValue(res.headers, 'pacmtoken');
    const data = await res.json();
    return { data, pacmtoken: newPacmToken };
};
