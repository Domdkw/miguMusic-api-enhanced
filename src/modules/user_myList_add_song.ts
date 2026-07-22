import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 添加歌曲到播放列表
 * @param pacmtoken 
 * @param playlistId 播放列表id
 * @param contentIds 歌曲id列表，逗号分隔
 * @returns 
 */
export const addSongToMyList = async (pacmtoken: string, playlistId: string, contentIds:string) => {
    const body = {
        "id": playlistId,
        "contentIds": contentIds.split(',')
    };
    const res = await axios.post(`https://app.c.nf.migu.cn/pc/user/api/add-music-list-song/v1.0`
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
