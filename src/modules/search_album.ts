import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';
import type { OpNumItem } from '../types/opNum';
import type { RelationAlbum } from '../types/album';
import type { SearchResultData } from '../types/search';

/** 专辑搜索结果的 dalbum 字段 */
interface SearchAlbum {
    resourceType: string;
    track: string;
    copyrightId: string;
    contentId: string;
    imgItems: ImgItem[];
    title: string;
    singerId: string;
    singer: string;
    price: string;
    tagItems: unknown[];
    opNumItem: OpNumItem;
    firstStartDate: string;
    firstEndDate: string;
    itemId: string;
    totalCount: string;
    isInFirstdate: string;
    vipType: string;
    saleEndDate: string;
    isBeforeSaleEndDate: string;
    dalbumPeriodStatus: string;
    isCallPayment: string;
    isCallPaymentForPresent: string;
    isCallPaymentForPurchase: string;
    isKnowledgePaid: string;
    haveFilterTag: boolean;
    publishDate: string;
    effectiveStatus: string;
    relationAlbums: RelationAlbum[];
    foreverListenFlag: string;
    foreverListen: boolean;
    isAppointment: string;
    presaleDate: string;
    highlights: string[];
    fieldType: number;
}

export type SearchAlbumResponse = ApiResponse<SearchResultData<{ dalbum: SearchAlbum }>>;

export const searchAlbum = async (text: string, page: number = 1, typeOrder: number = 0): Promise<SearchAlbumResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/album/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
};
