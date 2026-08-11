import { h5fetch } from '../utils/h5fetch';

export const getDLUrlV1 = async (songId: string, toneFlag: string = 'PQ') => {
    return await h5fetch(
        `https://app.c.nf.migu.cn/MIGUM2.0/strategy/download-url/by-songid/v1.0`,
        {
            headers: { "channel": "0146931", "version": "7.41.13" },
            params: {
                "formatType": toneFlag,
                songId
            }
        }
    );
};
