import { ckfetch } from '../utils/h5fetch';

/**
 * 添加喜欢音乐
 * @param pacmtoken 用户token
 * @param contentIds 音乐id列表，多个id用逗号隔开，例如：123,456,789
 * @returns 添加喜欢音乐结果，包含新pacmtoken
 */
export const likeSong = async (pacmtoken: string, contentIds: string) => {
    const contentIdsList = contentIds.split(',');
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/user/api/add-music-list-song/v1.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify({
            contentIds: contentIdsList,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};