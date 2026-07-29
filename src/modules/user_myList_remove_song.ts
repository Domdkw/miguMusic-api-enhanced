import { ckfetch } from '../utils/h5fetch';

/**
 * 删除播放列表中的歌曲
 * @param pacmtoken 用户token
 * @param playlistId 播放列表id
 * @param contentId 单个歌曲id
 * @returns 删除结果和新的pacmtoken
 */
export const removeSongFromMyList = async (pacmtoken: string, playlistId: string, contentId: string) => {
    const body = {
        "channel": "23",
        "songflag": "2",
        "contentId": contentId,
        "id": playlistId
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