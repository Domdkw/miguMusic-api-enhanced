import { h5fetch } from '../utils/h5fetch';

/**
 * 网页v5 歌单广场推荐歌单 (5个)
 * @returns
 */
export const getSquareRecommend = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/playlist-square/recommend-playlist/v1.0?templateVersion=2`);
};
