import { ckfetch } from '../utils/h5fetch';

/**
 * 添加歌曲到播放列表
 * @param pacmtoken 用户token
 * @param playlistId 播放列表id
 * @param contentIds 歌曲id列表，逗号分隔
 * @returns 添加结果和新的pacmtoken
 */
export const addSongToMyList = async (pacmtoken: string, playlistId: string, contentIds:string) => {
    const body = {
        "id": playlistId,
        "contentIds": contentIds.split(',')
    };
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/user/api/add-music-list-song/v1.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};