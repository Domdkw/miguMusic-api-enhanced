import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';
import type { SearchResultData } from '../types/search';

/** 歌手搜索结果的 singer 字段 */
interface SearchSinger {
    resourceType: string;
    track: string;
    summary: string;
    singerId: string;
    singer: string;
    type: string;
    imgs: ImgItem[];
    followNums: number;
    detail: string;
    columnId: string;
    isFuns: string;
    artistNamePinyin: string;
    artistNameFirstLetter: string;
    miguSingerPicItems: unknown[];
    artis5gImg: string;
    latestContentType: string;
    latestReleaseTime: string;
    latestContentId: string;
    videoUserId: string;
    highlights: string[];
    songNum: number;
    songCopyrightNum: number;
    albumNum: number;
    mvNum: number;
    vrbtNum: number;
    fieldType: number;
}

export type SearchSingerResponse = ApiResponse<SearchResultData<{ singer: SearchSinger }>>;

export const searchSinger = async (text: string, page: number = 1): Promise<SearchSingerResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/singer/v2.0?pageNo=${page}&text=${text}`);
};
