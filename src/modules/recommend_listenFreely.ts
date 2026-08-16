import { ckfetch } from '../utils/h5fetch';

/**
 * 获取畅听歌曲
 * @param pacmtoken 必填-登录凭证
 * @param modelId 可选-模型ID，默认701000(默认模式)
 * @returns 5个推荐歌曲
 */
export const getListenFreelySongs = async (pacmtoken: string, modelId: string = '701000') => {
    // 原版未处理登录状态，这里添加处理
    if(!pacmtoken) return {data:{success: false,code: "290001",info: "请先登录"},newPacmToken:undefined};
    const { data, cookies } = await ckfetch(`http://app.c.nf.migu.cn/resource-dataloader/recommend/listen-freely/v2.0?modelId=${modelId}`, {
        cookie: { pacmtoken }
    });
    return { data, newPacmToken: cookies.pacmtoken || '' };
};