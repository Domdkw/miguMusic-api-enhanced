import { ckfetch } from '../utils/h5fetch';

/**
 * 创建播放列表
 * @param pacmtoken 用户token
 * @param title 播放列表名称
 * @returns 创建结果和新的pacmtoken
 */
export const addUserMyList = async (pacmtoken: string, title: string) => {
    const body = {
        "title": title,
        "channel": "23",
        "type": "self_build"
    };
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/pc/open/api/music-list/add/v2.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};