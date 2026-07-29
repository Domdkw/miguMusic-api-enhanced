import { ckfetch } from '../utils/h5fetch';

/**
 * 删除播放列表
 * @param pacmtoken 用户token
 * @param playlistId 播放列表id
 * @returns 删除结果和新的pacmtoken
 */
export const removeUserMyList = async (pacmtoken: string, playlistId: string) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/v1.0/user/deleteMusicList.do?channel=23&id=${playlistId}`, {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};