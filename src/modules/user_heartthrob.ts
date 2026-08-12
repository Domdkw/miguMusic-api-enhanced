import { ckfetch } from '../utils/h5fetch';

/**
 * 心动模式推荐
 * @param pacmtoken 用户token
 * @param songId 单个歌曲 ID
 * @returns 心动模式推荐歌曲和新pacmtoken
 */
export const getUserHeartthrob = async (pacmtoken: string, songId: string) => {
    // 原版未处理登录状态，这里添加处理
    if(!pacmtoken) return { data: {success: false,code: "290001",info: "请先登录"}, newPacmToken: '' };
    
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/MIGUM3.0/resource-dataloader/recommend-song-listen/v1.0', {
        cookie: { pacmtoken },
        params: { "songId": songId }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};