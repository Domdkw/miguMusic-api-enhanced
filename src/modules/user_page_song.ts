import { h5fetch } from '../utils/h5fetch';

/**
 * 获取用户歌曲主页
 * @param userId 用户id （可选）
 * @param videoUserId 视频用户id （可选）
 * @returns 用户歌曲主页
 */
export const getUserSongPage = async (userId?: string, videoUserId?: string) => {
    if(!userId && !videoUserId) {
        return {data: { error: 'userId or videoUserId is required' }}
    }

    return await h5fetch(`https://app.c.nf.migu.cn/user/api/my-page-music/v1.0`
        ,{
            params: { userId, videoUserId },
            headers: {"channel": "0146931"}
        }
    )
};