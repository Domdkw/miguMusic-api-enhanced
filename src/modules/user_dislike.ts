import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * @param pacmtoken 
 * @param contentId 单个音乐id，例如：123
 * @returns 移除喜欢音乐结果，包含新pacmtoken
 */
export const dislikeSong = async (pacmtoken: string, contentId: string) => {
    const body = {
        "channel": "23",
        "contentId": contentId,
        "songflag": "2"
    };
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/user/h5-import-musiclist/v1.0`
        ,body
        ,{
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
