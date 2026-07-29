import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户收藏列表
 * @param pacmtoken 用户token
 * @param page 页码
 * @param size 每页大小
 * @returns 用户收藏列表和新的pacmtoken
 */
export const getUserCollectList = async (pacmtoken: string, page: number = 1, size: number = 20) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/user/h5/user/collection/v1.0?pageNo=${page}&type=1&OPType=03&pageSize=${size}&resourceType=2021`, {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};