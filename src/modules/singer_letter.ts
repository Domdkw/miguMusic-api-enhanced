import { h5fetch } from '../utils/h5fetch';

/**
 * 获取歌手情书
 * @param singerId 歌手ID
 * @returns 歌手情书
 */
export const getSingerLetter = async (singerId: string, pageId?: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/user/blog/api/love-letter/query/v1.0?resourceId=${singerId}&nextPageId=${pageId}`);
};
