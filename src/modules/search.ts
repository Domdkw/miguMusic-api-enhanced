import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SearchResultData, SearchSong } from '../types/search';

export type SearchSongResponse = ApiResponse<SearchResultData<{ song: SearchSong }>>;

export const searchSong = async (text: string, page: number = 1): Promise<SearchSongResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/song/v1.0?pageNo=${page}&text=${text}`);
};
