import { h5fetch } from '../utils/h5fetch';

export const getSingerAlbum = async (singerId: string, page: number = 1) => {
    const res = await h5fetch(`http://app.c.nf.migu.cn/bmw/singer/album/v1.0?singerId=${singerId}&pageNo=${page}`);
    res?.data?.contents.length < 10 ? res.data.hasNext = false : res.data.hasNext = true;
    return res;
};
