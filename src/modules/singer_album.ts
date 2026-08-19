import { h5fetch } from '../utils/h5fetch';

export const getSingerAlbum = async (singerId: string, page: number = 1) => {
    const res = await h5fetch(`http://app.c.nf.migu.cn/bmw/singer/album/v1.0?singerId=${singerId}&pageNo=${page}`);
    res?.data?.header?.nextPageUrl ? res.data.header.hasNext = true : res.data.header.hasNext = false;
    return res;
};
