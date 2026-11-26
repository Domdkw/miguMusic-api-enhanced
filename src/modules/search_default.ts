import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 搜索默认词数据 */
interface SearchDefaultData {
    intervalTime: number;
    agentUrlMap: Record<string, string>;
    textList: Array<{
        title: string;
        textType: string;
    }>;
}

export type SearchDefaultResponse = ApiResponse<SearchDefaultData>;

export const getSearchDefault = async (): Promise<SearchDefaultResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/column/search/default-text/v3.0?resourceVersion=2`);
};
