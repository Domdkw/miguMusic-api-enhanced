import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 添加用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param playlistId 播放列表id
 */
export const removeUserCollect = async (pacmtoken: string, playlistId: string) => {
    const res = await axios.get(`https://app.c.nf.migu.cn/pc/v1.0/user/del_collection.do?oPType=03&resourceType=2021&resourceId=${playlistId}`
        ,{
            headers: {
                'cookie': `pacmtoken=${pacmtoken}`,
            }
        }
    );
    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
