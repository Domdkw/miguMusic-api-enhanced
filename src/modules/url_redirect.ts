// 大象已无形 https://www.cnblogs.com/mmm/p/migu_music_api.html

import axios from 'axios';
import { changeQuality } from '../utils/quality';

/**
 * 获取重定向URL
 * @param contentId 音乐ID
 * @param toneFlag 音色
 * @returns 重定向URL
 */
export const getRedirectUrl = async (contentId: string, toneFlag: string|undefined = 'PQ') => {
    return await axios.head(
        `http://app.pd.nf.migu.cn/MIGUM2.0/v1.0/content/sub/listenSong.do`
        ,{
            maxRedirects: 0,
            params: {
                "toneFlag": "PQ",
                "copyrightId": "0",
                "contentId": contentId,
                "resourceType": "2",
                "channel": "0"
            }
        }
    ).catch(err => err.response)
    .then(res => res?.headers?.location?.split('?')[0] ?? '')
    .then(url => changeQuality(url, toneFlag, 'PQ'));
};
