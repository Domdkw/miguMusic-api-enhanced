import { ckfetch } from '../utils/h5fetch';

/**
 * 添加用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param playlistId 播放列表id
 * @param title 播放列表标题
 * @returns 添加结果和新的pacmtoken
 */
export const addUserCollect = async (pacmtoken: string, playlistId: string, title: string,) => {
    title = encodeURIComponent(title);
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/v1.0/user/add_collection.do?outOPType=03&outResourceName=${title}&outResourceType=2021&outResourceId=${playlistId}`, {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};