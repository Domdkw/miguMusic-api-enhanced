import { ckfetch } from '../utils/h5fetch';

/**
 * 获取 pacmtoken
 * @param token 登录token
 * @param type 类型
 * @param sourceId 来源ID
 * @param activityId 活动ID
 * @returns pacmtoken 和响应体
 */
export const getPacmToken = async (
    token: string = '', 
    type: string = '2', 
    sourceId: string = '220029',
    activityId: string = 'MUSIC-WWW'
) => {
    const { data, cookies } = await ckfetch(
        `https://c.musicapp.migu.cn/user/h5/token-validate/v3.0?token=${token}&type=${type}&sourceId=${sourceId}&activityId=${activityId}`,
        {
            cookie: { idmpauth: 'true@passport.migu.cn' },
            headers: {
                "Origin": "https://music.migu.cn",
                "Pragma": "no-cache",
                "Referer": "https://music.migu.cn/"
            },
        }
    );

    const pacmToken = cookies.pacmtoken || '';
    return { pacmToken, body: data };
};