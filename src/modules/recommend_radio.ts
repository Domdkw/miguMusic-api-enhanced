import { h5fetch } from '../utils/h5fetch';
import { getDeviceId } from '../utils/deviceID'

/**
 * 获取电台推荐 （主页电台）
 * @param type 1：上瘾电台 2：听见不同 <- 私人FM <-ALL
 * @returns 
 */
export const getRadioRecommend = async (type: number = 1) => {
    if (type !== 1 && type !== 2) {
        return {error: 'type must be 1 or 2'};
    }
    return await h5fetch(`https://app.c.nf.migu.cn/pc/column/music-radio/recommend/song/v2.0?remain=0&actionId=1&type=${type}`
        ,{
            method: 'GET',
            headers: {
                "Referer": "https://music.migu.cn/",
                "channel": "014X031",
                "deviceId": getDeviceId(),
                "recommendstatus": "1"
            }
        }
    );
};
