import { h5fetch } from '../utils/h5fetch';
/**
 * 获取视频彩铃播放URL
 * @param contentIds 视频ID列表，,分隔
 * @returns 视频播放URL列表
 */
export const getVrbtUrl = async (contentIds: string) => {
    contentIds = contentIds.replace(/,/g, '|');
    // origin: |
    return await h5fetch(`https://app.c.nf.migu.cn/strategy/vrbt/play/v1.0?contentIds=${contentIds}`
        ,{
            headers:{
                "channel": "014X031"
            }
        }
    );
};
