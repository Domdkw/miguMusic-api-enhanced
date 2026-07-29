import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户徽章信息
 * @param pacmtoken 用户token
 * @returns 用户徽章信息和新的pacmtoken
 */
export const getUserBadge = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/pc/open/api/member/icon/v1.0', {
        cookie: { pacmtoken },
        headers: {
            "Referer": "https://music.migu.cn/",
            "channel": "014X031",
            "timestamp": Date.now().toString()
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};