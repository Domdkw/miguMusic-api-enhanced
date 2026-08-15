import { h5fetch } from '../utils/h5fetch';

/**
 * 获取歌手mv列表页
 * @param singerId 歌手ID
 * @returns mv列表页
 */
export const getSingerMv = async (singerId: string, page?: number) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/singer/video/v1.0?pageNo=${page || 1}&singerId=${singerId}`);
};
