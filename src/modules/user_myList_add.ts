import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 创建播放列表
 * @param pacmtoken 用户token
 * @param title 播放列表名称
 * @returns 
 */
export const addUserMyList = async (pacmtoken: string, title: string) => {
    const body = {
        "title": title,
        "channel": "23",
        "type": "self_build"
    };
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/open/api/music-list/add/v2.0`
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
