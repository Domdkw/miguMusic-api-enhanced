import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { PlaylistInfo } from '../types/playlist';
import type { SearchResultData } from '../types/search';

/** 歌单搜索结果的 musicList 字段 */
interface SearchPlaylist extends PlaylistInfo {
    track: string;
    highlights: string[];
    fieldType: number;
}

export type SearchPlaylistResponse = ApiResponse<SearchResultData<{ musicList: SearchPlaylist }>>;

export const searchPlaylist = async (text: string, page: number = 1, typeOrder: number = 0): Promise<SearchPlaylistResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/music-list/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
};
