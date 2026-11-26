import { h5fetch } from '../utils/h5fetch';

export const getUrlV1 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', resourceType: string = '2') => {
    return await h5fetch(
        `https://app.c.vip.migu.cn/MIGUM3.0/strategy/pc/listen/v1.0`,
        {
            params: {
                contentId,
                copyrightId,
                resourceType,
                toneFlag: 'PQ'
            },
            headers: {
                "Channel": "014X031"
            }
        }
    );
};
