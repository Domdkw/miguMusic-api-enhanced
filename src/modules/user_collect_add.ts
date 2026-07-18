import axios from 'axios';
import { getSetCookieValueFromObject } from '../utils/setCookie';

/**
 * 添加用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param playlistId 播放列表id
 * @param title 播放列表标题
 */
export const addUserCollect = async (pacmtoken: string, playlistId: string, title: string,) => {
    title = encodeURIComponent(title);
    const res = await axios.get(`https://app.c.nf.migu.cn/pc/v1.0/user/add_collection.do?outOPType=03&outResourceName=${title}&outResourceType=2021&outResourceId=${playlistId}`
        ,{
            headers: {
                'cookie': `pacmtoken=${pacmtoken}`,
            }
        }
    );
    const newPacmToken = getSetCookieValueFromObject(res.headers, 'pacmtoken');
    return { data: res.data, newPacmToken };
};
