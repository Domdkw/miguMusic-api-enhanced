import { h5fetch } from '../utils/h5fetch';

/**
 * 移动端演唱会详情
 * 
 * $.data.contentItemList[0].itemList[0] 此演唱会简略信息
 * 
 * $.data.contentItemList[3].itemList 精选视频-列表
 * 
 * $.data.contentItemList[6].itemList 热门演唱会-列表
 * 
 * @param concertId 单个演唱会id
 * @returns 
 */
export const getConcertDetail = async (concertId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/concert-detail/release?columnId=${concertId}&templateVersion=10`);
};
