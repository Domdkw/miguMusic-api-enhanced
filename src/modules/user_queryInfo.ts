import { ckfetch } from '../utils/h5fetch';

/**
 * 查询用户信息
 * @param pacmtoken 用户token
 * @returns 用户信息和新的pacmtoken
 */
export const queryUserInfo = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/pc/user/h5/queryUserInfo/v1.0', {
        cookie: { pacmtoken },
        headers: {
            "channel": "014X031",
            "Referer": "https://music.migu.cn/"
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};