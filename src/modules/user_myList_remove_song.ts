import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 删除播放列表中的歌曲
 * @param pacmtoken 用户token
 * @param playlistId 播放列表id
 * @param contentId 单个歌曲id
 * @returns 
 */
export const removeSongFromMyList = async (pacmtoken: string, playlistId: string, contentId: string) => {
    const body = {
        "channel": "23",
        "songflag": "2",
        "contentId": contentId,
        "id": playlistId
    };
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/user/h5-import-musiclist/v1.0`
        ,body,{
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
