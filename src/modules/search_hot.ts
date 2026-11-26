import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 热搜榜条目 */
interface SearchHotRank {
    word: string;
    resourceType: string;
    resourceId: string;
    rank: number;
    note: string;
}

/** 热搜榜分组 */
interface SearchHotTab {
    tabName: string;
    searchRankList: SearchHotRank[];
    sort: number;
    displayType: string;
}

export type SearchHotResponse = ApiResponse<SearchHotTab[]>;

export const getSearchHot = async (): Promise<SearchHotResponse> => {
    return await h5fetch(`https://app.u.nf.migu.cn/bmw/hot-search/search-rank-list/v1.0`);
};
