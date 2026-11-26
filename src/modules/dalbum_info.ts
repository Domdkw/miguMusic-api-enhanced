import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';
import type { OpNumItem } from '../types/opNum';
import type { RelationAlbum } from '../types/album';

/** 数字专辑详情 */
interface DAlbumInfo {
    resourceType: string;
    copyrightId: string;
    contentId: string;
    materialId: string;
    imgItem: ImgItem[];
    title: string;
    singer: string;
    singerId: string;
    singerPicUrl: ImgItem[];
    summary: string;
    price: string;
    totalCount: string;
    presaleDate: string;
    firstStartDate: string;
    firstEndDate: string;
    onlineDate: string;
    saleEndDate: string;
    invalidateDate: string;
    isBeforeSaleEndDate: string;
    dalbumPeriodStatus: string;
    itemId: string;
    songItems: unknown[];
    mvList: unknown[];
    opNumItem: OpNumItem;
    tagItems: unknown[];
    isInFirstdate: string;
    vipType: string;
    redHareId: string;
    publishDate: string;
    isCallPayment: string;
    isCallPaymentForPresent: string;
    isCallPaymentForPurchase: string;
    isKnowledgePaid: string;
    haveFilterTag: boolean;
    originalFirstStartDate: string;
    originalfirstEndDate: string;
    vipFlag: string;
    vipStartTime: string;
    vipEndTime: string;
    effectiveStatus: string;
    relationAlbums: RelationAlbum[];
    isConvert: string;
    foreverListenFlag: string;
    foreverListen: boolean;
    isAppointment: string;
}

export type DAlbumInfoResponse = ApiResponse<DAlbumInfo>;

/**
 * 获取数字专辑信息
 * @param dAlbumId 数字专辑id
 * @return
 */
export const getDAlbumInfo = async (dAlbumId: string): Promise<DAlbumInfoResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/dalbum/v2.0?dAlbumId=${dAlbumId}`);
};
