import { getSetCookieValue } from '../utils/setCookie';

export const getUserMyList = async (pacmtoken: string, queryType: number = 0, page: number = 1, size: number = 20) => {
    const res = await fetch(`https://app.c.nf.migu.cn/user/h5/my-music-list/v1.0?queryType=${queryType}&pageNo=${page}&pageSize=${size}`
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
