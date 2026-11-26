import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SongItem } from '../types/base';

/** 专辑歌曲列表 */
interface AlbumSongData {
    songList: SongItem[];
    totalCount: number;
    hasNext: boolean;
}

export type AlbumSongResponse = ApiResponse<AlbumSongData>;

export const getAlbumSong = async (albumId: string, page: number = 1): Promise<AlbumSongResponse> => {
    return await h5fetch(`http://app.c.nf.migu.cn/MIGUM3.0/resource/album/song/v2.0?albumId=${albumId}&pageNo=${page}`);
};
