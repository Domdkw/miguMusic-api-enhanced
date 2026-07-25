import { h5fetch } from '../utils/h5fetch';

/**
 * 演唱会评论
 * @param concertId 单个演唱会id
 * @param page 翻页
 * @param size 单页大小
 * @returns 
 */
export const getConcertComment = async (concertId: string, page: number = 1, size: number = 20) => {
    return await h5fetch(`http://b.musicapp.migu.cn/MIGUM2.0/v1.0/danmaku/danmakuHisListPage.do?page=${page}&pageSize=${size}&resourceId=${concertId}`);
};
