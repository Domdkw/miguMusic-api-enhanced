import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { PlaylistInfo } from '../types/playlist';

export type PlaylistInfoResponse = ApiResponse<PlaylistInfo>;

export const getPlaylistInfo = async (playlistId: string): Promise<PlaylistInfoResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/resource/playlist/v2.0?playlistId=${playlistId}`);
};
