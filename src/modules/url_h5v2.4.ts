import { h5fetch } from '../utils/h5fetch';
import { decryptData } from '../utils/decryptH5Res';

export const getUrlH5V24 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ') => {
    const headers = {
        "birth": "h5page",
        "channel": "014X031",
        "Referer": "https://y.migu.cn/",
        "location-data": "30.6698676660,104.1229614820",
        "location-info": "",
    }

    const buf = await h5fetch(
        `https://c.musicapp.migu.cn/strategy/listen-url/h5/v2.4?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=2&netType=01&toneFlag=PQ&scene=&lowerQualityContentId=${contentId}`,
        {
            headers: headers,
            responseType: 'arraybuffer'
        }
    );

    return decryptData(buf);
};
