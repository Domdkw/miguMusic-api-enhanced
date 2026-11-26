import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 数字专辑售卖数量项 */
interface DAlbumPayItem {
    userType: string;
    serviceId: string;
    sum: string;
    count: string;
    pcount: string;
}

/** 数字专辑售卖信息 */
interface DAlbumPayData {
    subDAlbumCounts: DAlbumPayItem[];
}

export type DAlbumPayResponse = ApiResponse<DAlbumPayData>;

/**
 * 获取数字专辑售卖信息
 * @param dAlbumId 数字专辑id
 * @return 数量
 */
export const getDAlbumPay = async (dAlbumId: string): Promise<DAlbumPayResponse> => {
    return await h5fetch(`https://app.c.vip.migu.cn/MIGUM3.0/strategy/album-sub-rank/v1.0?queryType=01&resourceId=${dAlbumId}`
        ,{headers: {"channel": "0146891"}}
    );
};
