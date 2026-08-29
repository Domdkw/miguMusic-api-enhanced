import { h5fetch } from '../utils/h5fetch';

export const searchTicket = async (text: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/ticket/v1.0?pageNo=${page}&text=${text}`);
};
