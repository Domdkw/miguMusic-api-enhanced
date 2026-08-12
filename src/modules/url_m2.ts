// author: Domdkw
// license: cc-by-nc-sa-4.0
// Date: 2026年8月11日

import { h5fetch } from '../utils/h5fetch';
import { changeQuality } from '../utils/quality';

export const getUrlM2 = async (contentId: string, toneFlag: string = 'PQ', copyrightId?: string, songId?: string, albumId?: string) => {
    const data = await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/v2.1/content/listen-url`
        ,{
            params: {
                "netType": "01",
                "resourceType": "2",
                contentId,
                "toneFlag": "PQ", // PQ 默认返回，覆盖处理
                "copyrightId": copyrightId || undefined,
                "albumId": albumId || undefined,
                "songId": songId || undefined,
            },
            headers: {"channel": "0146832", "version": "7.41.13" }
        }
    );
    if (data?.data?.url === '') {
        return { success: false, error: 'URL 为空' };
    }
    data.data.oriUrl = data.data.url || '';
    data.data.url = changeQuality(data.data.url || '', toneFlag, 'PQ', true);

    // 额外处理原版Z3D，使用Android端解析
    if(data?.data?.songItem?.z3dCode) {
        const a = 'ftp://218.200.160.122:21/',b = 'https://freetyst.nf.migu.cn/';
        const z3dCode = data.data.songItem.z3dCode;
        z3dCode.url = encodeURI(z3dCode?.url?.replace(a,b) || '');
        z3dCode.iosUrl = encodeURI(z3dCode?.iosUrl?.replace(a,b) || '');
        z3dCode.androidUrl = encodeURI(z3dCode?.androidUrl?.replace(a,b) || '');
        z3dCode.h5Url = encodeURI(z3dCode?.h5Url?.replace(a,b) || '');
        data.data.songItem.z3dCode = z3dCode;
    }
    return data;
};
