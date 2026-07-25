import { h5fetch } from '../utils/h5fetch';

/**
 * 获取演唱会拓展
 * 
 * $.data.contentItemList[0].itemList[0] 此演唱会简略信息
 * 
 * $.data.contentItemList[10].itemList 推荐演唱会列表
 * 
 * @param concertId 单个演唱会id
 * @returns 
 */
export const getConcertDetail = async (concertId: string) => {
    return await h5fetch(`http://c.musicapp.migu.cn/MIGUM2.0/v2.0/content/queryConcertDetail.do?columnId=${concertId}`);
};
