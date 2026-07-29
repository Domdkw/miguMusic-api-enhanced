import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户播放列表
 * @param pacmtoken 用户token
 * @param queryType 查询类型
 * @param page 页码
 * @param size 每页大小
 * @returns 用户播放列表和新的pacmtoken
 */
export const getUserMyList = async (pacmtoken: string, queryType: number = 0, page: number = 1, size: number = 20) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/user/h5/my-music-list/v1.0?queryType=${queryType}&pageNo=${page}&pageSize=${size}`, {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};