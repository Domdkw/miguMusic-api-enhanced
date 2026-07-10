import { h5fetch } from '../utils/h5fetch';
import { getDeviceId } from '../utils/deviceID'

/**
 * 获取相似歌曲推荐
 * @param contentId 歌曲ID
 */
export const getSimilarSongRecommend = async (contentId: string = '') => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/recommend-song/similar/v1.0?contentId=${contentId}`
        ,{
            method: 'GET',
            headers: {
                "deviceId": getDeviceId(),
                "recommendstatus": "1"
            }
        }
    );
};
