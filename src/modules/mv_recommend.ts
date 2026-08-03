import { h5fetch } from '../utils/h5fetch';

/**
 * 获取相似MV推荐
 * @param mvContentId MV视频ID
 * @param page 页码
 * @returns 相似列表
 */
export const getMVRecommend = async (mvContentId: string, page: number = 1) => {
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM3.0/v3.0/content/recommend-mv?resourceId=${mvContentId}&pageNumber=${page}&resourceType=D`);
};
