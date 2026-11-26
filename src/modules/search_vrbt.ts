import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SearchVideoUser, SearchResultData } from '../types/search';

/** 视频彩铃搜索结果的 video 字段 */
interface SearchVrbtVideo {
    contentId: string;
    copyrightId: string;
    title: string;
    resourceType: string;
    songId: string;
    showResolution: string;
    firstResolution: string;
    showImg: string;
    firstImg: string;
    firstImg01: string;
    verticalImg: string;
    user: SearchVideoUser[];
    duration: number;
    playAction: string;
    isAllowDownload: number;
    isValidate: number;
    relateRingId: string;
    setRingFlag: number;
    setRingType: number;
    isSupportReward: number;
    publicStatus: number;
    contentTips: string;
    isDiy: number;
    relateRingTitle: string;
    relateRingCopyrightId: string;
    validTime: string;
    freeLibEndTime: string;
    track: string;
    extParam: Record<string, unknown>;
    dislikeList: Array<{
        id: string;
        name: string;
    }>;
    highlights: string[];
}

export type SearchVrbtResponse = ApiResponse<SearchResultData<{ video: SearchVrbtVideo }>>;

export const searchVrbt = async (text: string, page: number = 1): Promise<SearchVrbtResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/rbt/v1.0?pageNo=${page}&text=${text}`);
};
