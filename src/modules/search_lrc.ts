import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SearchResultData, SearchSong } from '../types/search';

export type SearchLrcResponse = ApiResponse<SearchResultData<{ song: SearchSong }>>;

export const searchLrc = async (text: string, page: number = 1): Promise<SearchLrcResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/lrc/v1.0?pageNo=${page}&text=${text}`);
};
