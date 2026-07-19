import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * @param pacmtoken 
 * @param contentIds 音乐id列表，多个id用逗号隔开，例如：123,456,789
 * @returns 添加喜欢音乐结果，包含新pacmtoken
 */
export const likeSong = async (pacmtoken: string, contentIds: string) => {
    const contentIdsList = contentIds.split(',');
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/user/api/add-music-list-song/v1.0`
        ,{
            contentIds: contentIdsList,
        }
        ,{
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
