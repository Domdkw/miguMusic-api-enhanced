import { h5fetch } from '../utils/h5fetch';

/**
 * 新歌速递
 * @returns 
 */
export const getNewSongList = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/v1.0/template/get-new-music-list-header`);
};
