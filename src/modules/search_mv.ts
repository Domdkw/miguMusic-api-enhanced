import { h5fetch } from '../utils/h5fetch';

export const searchMv = async (text: string, page: number = 1, typeOrder: number = 0) => {
    return await h5fetch(`http://app.c.nf.migu.cn/bmw/search/video/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
};
