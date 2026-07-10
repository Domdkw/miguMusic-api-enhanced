import { h5fetch } from '../utils/h5fetch';

/**
 * 获取相似歌手
 * @param singerId 歌手ID
 */
export const getSingerSimilar = async (singerId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/recommend-singer/similar/v1.0?singerId=${singerId}`);
};
