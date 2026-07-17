import { h5fetch } from '../utils/h5fetch';

/**
 * 获取视频播放次数
 * @param contentIds 视频ID列表，逗号分隔 600926000022458628,600926000002564425
 * @returns 视频播放次数列表
 */
export const getVrbtOpNum = async (contentIds: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/resource/vrbt/opnum/v1.0?resourceType=M&contentIds=${contentIds}`);
};
