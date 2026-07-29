import { ckfetch } from '../utils/h5fetch';

/**
 * 获取今日推荐
 * @param pacmtoken 用户token
 * @returns 今日推荐列表和新的pacmtoken
 */
export const getTodayRecommend = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/pc/v1.0/template/todayRecommendList/release?actionId=1&index=1&templateVersion=5', {
        cookie: { pacmtoken },
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};