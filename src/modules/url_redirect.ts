// 大象已无形 https://www.cnblogs.com/mmm/p/migu_music_api.html
// feat: 2026年8月15日 vip

import axios from 'axios';
import { changeQuality } from '../utils/quality';

/**
 * 获取重定向URL
 * @param contentId 音乐ID
 * @param toneFlag 音色
 * @param isVip 是否为会员音乐 未知，是会员音乐true，不是会员音乐false
 * @returns 重定向URL
 */
export const getRedirectUrl = async (contentId: string, toneFlag: string = 'PQ', copyrightId?: string, isVip: boolean = true) => {
    if(isVip && (!copyrightId || copyrightId === '0')) return '';
    return await axios.head(
        isVip ? `https://c.musicapp.migu.cn/strategy/listen-song/v2.3` : `https://app.pd.nf.migu.cn/MIGUM2.0/v1.0/content/sub/listenSong.do`
        ,{
            maxRedirects: 0,
            params: {
                "toneFlag": 'PQ',
                "copyrightId": copyrightId || "0",
                "contentId": contentId,
                "resourceType": "2",
                "channel": "0146921"
            },
            headers: {"User-Agent": 'okhttp/3.14.9'} // !==null
        }
    ).catch(err => err.response)
    .then(res => res?.headers?.location?.split('?')[0] ?? '')
    .then(url => changeQuality(url, toneFlag, 'PQ'));
};
