import { h5fetch } from '../utils/h5fetch';

export const getTicketInfo = async (page: number = 1, pageCount: number = 20,) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/v1.0/ticket/home/ticket?pageNum=${page}&pageCount=${pageCount}`);
};
