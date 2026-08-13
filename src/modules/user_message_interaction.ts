// 2026年8月13日 ver:7.50.0

import { ckfetch } from '../utils/h5fetch';

/**
 * 用户互动消息
 * @param pacmtoken 用户token
 * @param page 页码
 * @param size 每页大小
 * @returns 用户互动和新的pacmtoken
 */
export const getInteractionMsg = async (pacmtoken: string, type: string, page: number = 1, size: number = 10) => {
    if (!['fans', 'collection'].includes(type)) {
        return {data:{success:false,error:'type must be fans or collection'},newPacmToken:undefined};
    }
    
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v2.0/user/interaction.do`, {
        cookie: { pacmtoken },
        params: { "type": type === 'fans' ? 2 : 1, pageNo: page, pageSize: size }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};