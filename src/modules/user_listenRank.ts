import { ckfetch } from '../utils/h5fetch';

/**
 * 听歌排行
 * @param pacmtoken 用户token
 * @param type 排行类型: week:最近一周 year:过去三年
 * @returns 听歌排行列表，包含新pacmtoken
 */
export const getListenRank = async (pacmtoken: string, type: string) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/MIGUM3.0/bmw/listen-song/ranking/v1.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify({ "type": type === 'year' ? 2 : 1 }),
        headers: {'Content-Type': 'application/json'}
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};