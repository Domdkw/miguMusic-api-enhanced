import { h5fetch } from '../utils/h5fetch';

/**
 * 演唱会简略信息
 * 
 * 返回 $.data.liveId 直播id 等等
 * @param concertId 单个演唱会id
 * @returns 
 */
export const getConcertInfo = async (concertId: string) => {
    return await h5fetch(`http://c.musicapp.migu.cn/MIGUM2.0/v2.0/content/queryConcertSummary.do?columnId=${concertId}`);
};
