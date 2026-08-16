import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户手机号，彩铃信息
 * @param pacmtoken 用户token
 * @returns 用户完整手机号，彩铃信息和新的pacmtoken
 */
export const getUserPhoneInfo = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/MIGUM2.0/v1.0/tone/isrbtuser.do', {
        cookie: { pacmtoken },
        headers: {
            "channel": "0146921",
            "version": "8.8.0"
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};