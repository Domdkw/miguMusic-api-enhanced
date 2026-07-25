import { h5fetch } from '../utils/h5fetch';

/**
 * 获取演唱会url (auto hls)
 * 
 * @param concertId 单个演唱会id
 * @param liveId 直播id (concert_info中获取)
 * @param rateLevel 视频质量 (1:普通 2:高清 3:超清)
 * @returns 
 */
export const getConcertUrl = async (concertId: string, liveId: string, rateLevel: number = 1) => {
    return await h5fetch(`http://c.musicapp.migu.cn/MIGUM2.0/v2.1/danmaku/liveServerHosts.do?concertId=${concertId}&liveId=${liveId}&liveType=1&rateLevel=${rateLevel}`
        ,{
            headers: {
                "channel": "0146921"//android client
            }
        }
    );
};
