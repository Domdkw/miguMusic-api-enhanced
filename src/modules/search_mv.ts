import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SearchVideoUser, SearchResultData } from '../types/search';

/** MV 搜索结果的 video 字段 */
interface SearchVideo {
    contentId: string;
    copyrightId: string;
    title: string;
    resourceType: string;
    songId: string;
    showResolution: string;
    showImg: string;
    user: SearchVideoUser[];
    duration: number;
    playAction: string;
    scopeOfCopyright: string;
    isVip: number;
    isValidate: number;
    rateFormats: Array<{
        formatType: string;
        formatDesc: string;
    }>;
    publicStatus: number;
    validTime: string;
    track: string;
    dislikeList: Array<{
        id: string;
        name: string;
    }>;
    highlights: string[];
}

export type SearchMvResponse = ApiResponse<SearchResultData<{ video: SearchVideo }>>;

export const searchMv = async (text: string, page: number = 1, typeOrder: number = 0): Promise<SearchMvResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/video/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
};
