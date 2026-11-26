import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SongItem } from '../types/base';

/** 歌单歌曲列表 */
interface PlaylistSongData {
    totalCount: number;
    publishTime: string;
    songList: SongItem[];
}

export type PlaylistSongResponse = ApiResponse<PlaylistSongData>;

export const getPlaylistSong = async (playlistId: string, page: number = 1, size: number = 20): Promise<PlaylistSongResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/playlist/song/v2.0?pageNo=${page}&pageSize=${size}&playlistId=${playlistId}`);
};
