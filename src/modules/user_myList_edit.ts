import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';
import { parseBody } from 'hono/utils/body';

export const editUserMyList = async (pacmtoken: string, title: string, playlistId: string) => {
    const body = {
        "title": title,
        "channel": "23",
        "id": playlistId,
        "songflag": "0"
    };
    //API与dislike.ts相同
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/user/h5-import-musiclist/v1.0`
        ,body
        ,{ 
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
            }
        }
    );

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
