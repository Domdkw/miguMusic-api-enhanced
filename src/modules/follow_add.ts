import { ckfetch } from '../utils/h5fetch';

/**
 * 关注歌手
 * @param pacmtoken 用户token
 * @param singerId 歌手id
 * @returns 关注结果和新的pacmtoken
 */
export const addFollower = async (pacmtoken: string, singerId: string) => {
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/user/social/api/add-follow/v1.0`
        ,{params: {
            "followId": singerId,
            "type": "1"
        }
        ,cookie: { pacmtoken }}
    );
    return { data, newPacmToken: cookies.pacmtoken || '' };
};
