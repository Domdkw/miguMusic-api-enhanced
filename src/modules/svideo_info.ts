import { h5fetch } from '../utils/h5fetch';

/**
 * 获取短视频详情
 * @param contentIds 短视频ID，多个ID用逗号分隔 （自动处理）
 * @returns 短视频详情
 */
export const getSVideoInfo = async (contentIds: string) => {
    const contentIdList = contentIds.split(',');
    contentIdList.map((item) => {
        return '6000,' + item;
    }).join('|');
    return await h5fetch(`https://app.c.nf.migu.cn/resource/video-info/by-id/v1.0?requestParams=${contentIdList}`);
};
