import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 删除播放列表
 * @param pacmtoken 用户token
 * @param playlistId 播放列表id
 * @returns 
 */
export const removeUserMyList = async (pacmtoken: string, playlistId: string) => {
    const res = await axios.get(`https://app.c.nf.migu.cn/pc/v1.0/user/deleteMusicList.do?channel=23&id=${playlistId}`, {
        headers: {
            "Cookie": `pacmtoken=${pacmtoken}`,
        }
    });

    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
