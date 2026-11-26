import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SongItem } from '../types/base';

/** 数字专辑歌曲列表 */
interface DAlbumSongData {
    songList: SongItem[];
    totalCount: number;
}

export type DAlbumSongResponse = ApiResponse<DAlbumSongData>;

/**
 * 获取数字专辑歌曲列表
 * @param dAlbumId 数字专辑id
 * @return 歌曲列表
 */
export const getDAlbumSong = async (dAlbumId: string): Promise<DAlbumSongResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/dalbum/song/v2.0?dAlbumId=${dAlbumId}`);
};
