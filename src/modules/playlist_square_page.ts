import { h5fetch } from '../utils/h5fetch';

/**
 * 网页v5 歌单广场界面
 * @returns
 */
export const getSquarePage = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/page-data/playlist-square-recommend/v1.0?templateVersion=2`);
};
