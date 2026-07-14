import { h5fetch } from '../utils/h5fetch';

/**
 * 获取电台推荐 （所有电台）
 * 私人FM（上瘾电台、听见不同），时序电台，分类电台，乐游播客，YOU乐电台
 * @param pacmtoken 可选-登录凭证，用于获取所有电台
 * @returns 
 */
export const getRadioRecommendAll = async (pacmtoken = '') => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/page-data/music-radio/v1.0?templateVersion=1`
        ,{
            method: 'GET',
            headers: {
                "Cookie": `pacmtoken=${pacmtoken}`,
            }
        }
    );
};
