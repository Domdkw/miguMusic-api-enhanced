import { h5fetch } from '../utils/h5fetch';

export const getDLUrlV1 = async (songId: string, toneFlag: string = 'PQ') => {
    return await h5fetch(
        `https://app.c.vip.migu.cn/MIGUM2.0/strategy/download-url/by-songid/v1.0`,
        {
            headers: { "channel": "0146931", "version": "8.8.0" },
            params: {
                "formatType": toneFlag,
                songId
            }
        }
    );
};
