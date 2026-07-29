import { ckfetch } from '../utils/h5fetch';

/**
 * 获取用户呢喃签到信息
 * @param pacmtoken - 用户认证 token
 * @returns 签到信息和新的 pacmtoken
 */
export const getNinanSignInfo = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch(
        'http://u.musicapp.migu.cn/MIGUM3.0/user/sign-center/v1.0',
        {
            cookie: { pacmtoken },
            headers: {
                'channel': '014021I',
            }
        }
    );

    return {
        data,
        newPacmToken: cookies.pacmtoken || ''
    };
};
