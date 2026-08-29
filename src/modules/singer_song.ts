import { h5fetch } from '../utils/h5fetch';

export const getSingerSong = async (singerId: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/singer/song/v1.0?pageNo=${page}&singerId=${singerId}&type=1`);
};
