import { h5fetch } from '../utils/h5fetch';

/**
 * 获取电台歌曲
 * @param radioId 电台ID
 * @param page 页码
 * @returns 
 */
export const getRadioSong = async (radioId: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/column/music-radio/scene/song/v3.0?remain=0&pageNo=${page}&actionId=1&radioId=${radioId}`);
};
