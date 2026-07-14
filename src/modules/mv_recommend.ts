import { h5fetch } from '../utils/h5fetch';

/**
 * 获取相似歌曲推荐
 * @param contentId 歌曲ID
 */
export const getMVRecommend = async (mvContentId: string, page: number = 1) => {
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM3.0/v3.0/content/recommend-mv?resourceId=${mvContentId}&pageNumber=${page}&resourceType=D`);
};
