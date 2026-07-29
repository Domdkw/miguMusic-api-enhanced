import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户主页信息
 * @param pacmtoken 用户token
 * @returns 用户主页信息和新的pacmtoken
 */
export const getUserHomePage = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/pc/user/home-page/v2.0', {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};