// author: Domdkw
// license: cc-by-nc-sa-4.0
// Date: 2026年8月11日

import { h5fetch } from '../utils/h5fetch';

export const getUrlM2 = async (contentId: string, toneFlag: string = 'PQ', copyrightId?: string, songId?: string, albumId?: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/v2.1/content/listen-url`
        ,{
            params: {
                "netType": "01",
                "resourceType": "2",
                contentId,
                toneFlag,
                "copyrightId": copyrightId || undefined,
                "albumId": albumId || undefined,
                "songId": songId || undefined,
            },
            headers: {"channel": "0146832"}
        }
    );
};
