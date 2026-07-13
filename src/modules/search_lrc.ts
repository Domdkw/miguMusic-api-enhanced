import { h5fetch } from '../utils/h5fetch';

export const searchLrc = async (text: string, page: number = 1) => {
    return await h5fetch(`http://app.c.nf.migu.cn/bmw/search/lrc/v1.0?pageNo=${page}&text=${text}`);
};
