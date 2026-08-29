import { h5fetch } from '../utils/h5fetch';

export const getRankInfo = async (rankId: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/rank/rank-info/v1.0?pageNo=${page}&rankId=${rankId}`);
};
