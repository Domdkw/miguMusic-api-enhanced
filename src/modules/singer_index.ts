import { h5fetch } from '../utils/h5fetch';

export const getSingerIndex = async (singerId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/singer/index/v1.0?singerId=${singerId}`);
};
