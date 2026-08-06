import { ckfetch } from '../utils/h5fetch';

/**
 * 短视频用户推荐
 * @param pacmtoken 用户授权token
 * @returns 短视频用户推荐
 */
export const getSVideoRecommend = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/resource-dataloader/recommend-video/v2.0', {
        method: 'GET',
        cookie: { pacmtoken },
        params: {
            currentScreen: 1,
            scene: 'home_selected',
        },
        headers: {'Content-Type': 'application/json'}
    });
    return { data, newPacmToken: cookies.pacmtoken || '' }
};
