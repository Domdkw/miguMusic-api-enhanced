import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SearchResultData } from '../types/search';

/** 搜索建议结果的 text 字段 */
interface SearchSuggestItem {
    text: {
        text: string;
        track: string;
        searchTags: Array<{
            name: string;
            type: string;
        }>;
        highlights: string[];
    };
}

export type SearchSuggestResponse = ApiResponse<SearchResultData<SearchSuggestItem>>;

export const searchSuggest = async (text: string): Promise<SearchSuggestResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/suggest/v1.0?text=${text}`);
};
