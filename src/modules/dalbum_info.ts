import { h5fetch } from '../utils/h5fetch';

/**
 * 获取数字专辑信息
 * @param dAlbumId 数字专辑id
 * @return 
 */
export const getDAlbumInfo = async (dAlbumId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/dalbum/v2.0?dAlbumId=${dAlbumId}`);
};
