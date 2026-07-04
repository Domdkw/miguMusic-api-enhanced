import { h5fetch } from '../utils/h5fetch';

export const getComment = async (
    resourceId: string,
    resourceType: number = 2, // 2: 歌曲 D: MV
    size: number = 20,
    hotCommentStart: number = 0,
) => {
    return await h5fetch(`https://u.musicapp.migu.cn/MIGUM3.0/user/comment/stack/v1.0?resourceId=${resourceId}&resourceType=${resourceType}&pageSize=${size}&hotCommentStart=${hotCommentStart}&platformType=1&commentId=0&queryType=1`);
};
