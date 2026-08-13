// 2026年8月13日 ver:7.50.0

import { ckfetch } from '../utils/h5fetch';

/**
 * 用户收到的赞
 * @param pacmtoken 用户token
 * @param page 页码
 * @param size 每页大小
 * @returns 用户收到的赞和新的pacmtoken
 */
export const getThumbsMsg = async (pacmtoken: string, page: number = 1, size: number = 10) => {
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/thumbsDetail.do`, {
        cookie: { pacmtoken },
        params: { pageNo: page, pageSize: size }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};