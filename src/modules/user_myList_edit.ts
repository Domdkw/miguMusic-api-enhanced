import { ckfetch } from '../utils/h5fetch';

/**
 * 编辑播放列表
 * @param pacmtoken 用户token
 * @param title 播放列表名称
 * @param playlistId 播放列表id
 * @returns 编辑结果和新的pacmtoken
 */
export const editUserMyList = async (pacmtoken: string, title: string, playlistId: string) => {
    const body = {
        "title": title,
        "channel": "23",
        "id": playlistId,
        "songflag": "0"
    };
    //API与dislike.ts相同
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