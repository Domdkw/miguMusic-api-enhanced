import { h5fetch } from '../utils/h5fetch';

/**
 * 获取数字专辑售卖信息
 * @param dAlbumId 数字专辑id
 * @return 数量
 */
export const getDAlbumPay = async (dAlbumId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/strategy/album-sub-rank/v1.0?queryType=01&resourceId=${dAlbumId}`
        ,{headers: {"channel": "0146891"}}
    );
};
