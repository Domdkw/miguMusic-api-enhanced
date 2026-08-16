import { ckfetch } from '../utils/h5fetch';

/**
 * 获取畅听tab
 * @param pacmtoken 可选-登录凭证，用于获取所有场景 （无则3个）
 * @returns 3个听歌模式，多个场景
 */
export const getListenFreelyTab = async (pacmtoken = '') => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/bmw/page/view/listen-freely/v1.0`, {
        cookie: pacmtoken ? { pacmtoken } : undefined,
    });

    return { data, newPacmToken: cookies.pacmtoken || undefined };
};