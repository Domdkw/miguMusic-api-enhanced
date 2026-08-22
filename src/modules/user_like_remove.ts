import { ckfetch } from '../utils/h5fetch';

/**
 * 移除喜欢音乐
 * @param pacmtoken 用户token
 * @param contentId 单个音乐id，例如：123
 * @returns 移除喜欢音乐结果，包含新pacmtoken
 */
export const dislikeSong = async (pacmtoken: string, contentId: string) => {
    const body = {
        "channel": "23",
        "contentId": contentId,
        "songflag": "2"
    };
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/user/h5-import-musiclist/v1.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};