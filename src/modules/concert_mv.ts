import { h5fetch } from '../utils/h5fetch';

/**
 * 通过演唱会推荐 MV
 * @param concertId 单个演唱会id
 * @returns 
 */
export const getConcertRecommendMv = async (concertId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/v1.0/liveshow/query-mv-detail?concertId=${concertId}`);
};
