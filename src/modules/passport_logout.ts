import { ckfetch } from '../utils/h5fetch';

/**
 * 用户退出登录
 * @param pacmtoken 用户token
 * @returns 退出登录结果
 */
export const logout = async (pacmtoken: string) => {
    const { data } = await ckfetch(`https://c.musicapp.migu.cn/mgateway/api/clearPacMtoken`, {
        cookie: { pacmtoken },
    });

    return data;
};