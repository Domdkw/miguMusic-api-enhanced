import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';
import type { OpNumItem } from '../types/opNum';
import type { SearchResultData } from '../types/search';

/** 演唱会搜索结果的 concert 字段 */
interface SearchConcert {
    resourceType: string;
    track: string;
    concertId: string;
    liveShowId: string;
    channelName: string;
    type: string;
    showType: string;
    isFree: string;
    singerNames: string;
    singerIds: string;
    title: string;
    imgItems: ImgItem[];
    place: string;
    publishTime: string;
    liveshowTime: string;
    opNumItem: OpNumItem;
    tags: Array<{
        resourceType: string;
        tagId: string;
        tagName: string;
    }>;
    itemId: string;
    summary: string;
    subTitle: string;
    trySee: number;
    concertStatus: string;
    vrId: string;
    highlights: string[];
}

export type SearchConcertResponse = ApiResponse<SearchResultData<{ concert: SearchConcert }>>;

export const searchConcert = async (text: string, page: number = 1): Promise<SearchConcertResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/concert/v1.0?pageNo=${page}&text=${text}`);
};
