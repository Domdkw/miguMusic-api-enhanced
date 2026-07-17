import { h5fetch } from '../utils/h5fetch';

/**
 * 获取短视频播放地址
 * @param contentIds 短视频ID，多个ID用,分隔 600985A00005943149,600985A00004881354
 * @param formatType 视频格式，HQ/PQ/SQ 若无自动降级 HQ默认
 * @returns 短视频播放地址
 */
export const getSVideoUrl = async (contentIds: string, formatType: string = 'HQ') => {
    contentIds = contentIds.replace(/,/g, '|');
    // origin: |
    return await h5fetch(`https://app.c.nf.migu.cn/strategy/short-video/play/v1.0?contentIds=${contentIds}&formatType=${formatType}`);
};
