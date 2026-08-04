import { h5fetch } from '../utils/h5fetch';

/**
 * VIP 热歌
 * @param size 数量
 * @returns
 */
export const getVipPlaylist = async (size: number = 10) => {
    return await h5fetch(`http://app.c.nf.migu.cn/bmw/vip-exclusive/auditions-list/v1.0?pageSize=${size}`);
};
