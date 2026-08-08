import { ckfetch } from '../utils/h5fetch';

/**
 * 取消关注歌手
 * @param pacmtoken 用户token
 * @param singerId 歌手id
 * @returns 取消关注结果和新的pacmtoken
 */
export const removeFollower = async (pacmtoken: string, singerId: string) => {
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/user/social/api/delete-follow/v1.0?followId=${singerId}`
        ,{cookie: { pacmtoken }}
    );
    return { data, newPacmToken: cookies.pacmtoken || '' };
};
