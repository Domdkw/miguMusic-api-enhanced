import { h5fetch } from '../utils/h5fetch';

/**
 * 获取用户短视频列表
 * @param videoUserId 用户ID
 * @param nextPageId 分页ID, 第一页时为空, 每个请求都会返回nextPageId
 * @returns 用户短视频列表
 */
export const getSVideoUserContent = async (videoUserId: string, nextPageId: string = '') => {
    return await h5fetch(`https://app.c.nf.migu.cn/user/i/user-content-list/v1.0?nextPageId=${nextPageId}&videoUserId=${videoUserId}`);
};
