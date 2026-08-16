import { h5fetch } from '../utils/h5fetch';

export const searchPlaylist = async (text: string, page: number = 1, typeOrder: number = 0) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/music-list/v1.0?pageNo=${page}&text=${text}&typeOrder=${typeOrder}`);
};
