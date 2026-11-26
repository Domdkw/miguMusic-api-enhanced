import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 票务搜索数据（无结果时仅有 hasNext/seq） */
interface SearchTicketData {
    hasNext: boolean;
    seq: string;
    items?: unknown[];
}

export type SearchTicketResponse = ApiResponse<SearchTicketData>;

export const searchTicket = async (text: string, page: number = 1): Promise<SearchTicketResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/ticket/v1.0?pageNo=${page}&text=${text}`);
};
