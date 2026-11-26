import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SongItem } from '../types/base';

/** 电台歌曲数据（部分内容需登录） */
interface RadioSongData {
    nextPageNo: number;
    songList?: SongItem[];
}

export type RadioSongResponse = ApiResponse<RadioSongData>;

/**
 * 获取电台歌曲
 * @param radioId 电台ID
 * @param page 页码
 * @returns
 */
export const getRadioSong = async (radioId: string, page: number = 1): Promise<RadioSongResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/column/music-radio/scene/song/v3.0?remain=0&pageNo=${page}&actionId=1&radioId=${radioId}`);
};
