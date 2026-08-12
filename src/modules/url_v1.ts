import { h5fetch } from '../utils/h5fetch';
import { changeQuality } from '../utils/quality';

export const getUrlV1 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', resourceType: string = '2') => {
    const data = await h5fetch(
        `https://app.c.nf.migu.cn/MIGUM3.0/strategy/pc/listen/v1.0?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=${resourceType}&toneFlag=PQ`,
        {
            headers: {
                "Channel": "014X031"
            }
        }
    );
    data.data.oriUrl = data.data.url || '';
    data.data.url = changeQuality(data.data.url || '', toneFlag, 'PQ', true);
    return data;
};
