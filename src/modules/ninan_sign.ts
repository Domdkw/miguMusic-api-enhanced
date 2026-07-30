import { ckfetch } from '../utils/h5fetch';

/**
 * 呢喃签到
 * @param pacmtoken - 用户认证 token
 * @returns 签到结果和新的 pacmtoken
 */
export const signNinan = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('http://c.musicapp.migu.cn/MIGUM2.0/v2.0/user/sign-reward',
        {
            cookie: { pacmtoken },
            headers: {
                "location-data": "30.6698676660,104.1229614820",
                "channel": "0146921",
            }
        }
    );

    return {
        data,
        newPacmToken: cookies.pacmtoken || ''
    };
};
