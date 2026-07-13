import { h5fetch } from '../utils/h5fetch';

export const getPlaylistSquare = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/page-data/playlist-square-recommend/v1.0?templateVersion=2`);
};
