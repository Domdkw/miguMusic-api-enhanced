import { ckfetch } from '../utils/h5fetch';

/**
 * 删除用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param playlistId 播放列表id
 * @returns 删除结果和新的pacmtoken
 */
export const removeUserCollect = async (pacmtoken: string, playlistId: string) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/v1.0/user/del_collection.do?oPType=03&resourceType=2021&resourceId=${playlistId}`, {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};