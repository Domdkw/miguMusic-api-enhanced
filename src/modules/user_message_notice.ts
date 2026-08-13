// 2026年8月13日 ver:7.50.0

import { ckfetch } from '../utils/h5fetch';

/**
 * 用户通知
 * @param pacmtoken 用户token
 * @param page 页码
 * @param size 每页大小
 * @returns 用户通知列表和新的pacmtoken
 */
export const getNoticeMsg = async (pacmtoken: string, page: number = 1, size: number = 10) => {
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/notifies.do`, {
        cookie: { pacmtoken },
        params: { pageNo: page, pageSize: size }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};