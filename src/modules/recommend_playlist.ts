import { h5fetch } from '../utils/h5fetch';

export const getRecommendPlaylist = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/index-show/recommend-playlist/v3.0`);
};
