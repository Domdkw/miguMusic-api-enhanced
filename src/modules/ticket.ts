import { h5fetch } from '../utils/h5fetch';

/**
 * 获取票务信息
 * @param page 页码 可选 默认1
 * @param size 每页数量 可选 默认20
 * @returns 票务信息
 */
export const getTicketInfo = async (page: number = 1, size: number = 20,) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/v1.0/ticket/home/ticket?pageNum=${page}&pageCount=${size}`);
};
