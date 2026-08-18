import { ckfetch } from '../utils/h5fetch';

/**
 * 查询已购歌曲
 * @param pacmtoken 用户token
 * @returns 已购歌曲列表
 */
export const getUserOrdered = async (pacmtoken: string) => {
    if(!pacmtoken) return {data:{success: false,code: "290001",info: "请先登录"},newPacmToken:undefined};
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/MIGUM3.0/strategy/song-ordered/v2.0', {
        cookie: { pacmtoken },
        headers: { "channel": "014X031" }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};