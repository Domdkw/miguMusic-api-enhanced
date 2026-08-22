import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户我喜欢列表
 * @param playlistId 播放列表id
 * @param page 页码
 * @param size 每页数量
 * @param pacmtoken 已登录用户token 二选一
 * @param userId 他人用户id 二选一
 * @returns 我喜欢列表
 */
export const getUserLikeList = async (playlistId: string, page: number, size: number, pacmtoken: string = '', userId: string = '') => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/resource/h5/my/playlist/song/v1.0', {
        cookie: { pacmtoken: pacmtoken || '' },
        headers: { uid: userId || '' },
        params: {
            pageNo: page,
            pageSize: size,
            playlistId: playlistId,
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};