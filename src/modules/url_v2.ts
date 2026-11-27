import { h5fetch } from '../utils/h5fetch';
import { getDeviceId } from '../utils/device'
import { decryptData } from '../utils/decryptH5Res'

export const getUrlV2 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', pacmtoken: string = '') => {
    const deviceId = getDeviceId();
    const timestamp = Date.now();

    const headers = {
        "channel": "014X031",
        "subchannel": "014X031",
        "pacmtoken": pacmtoken,
        "deviceId": deviceId,
        "ua": "Android_migu",
        "version": "6.8.8",
        "activityId": "MUSIC-WWW",
        "birth": "h5page",
        "signature": "1",
        "timestamp": timestamp.toString(),
        "referer": "https://music.migu.cn/",
    };

    const buf = await h5fetch(
        `https://app.c.nf.migu.cn/strategy/pc/listen/v2.0`,
        {
            params: {
                contentId,
                copyrightId,
                scene: '',
                netType: '01',
                resourceType: '2',
                toneFlag: toneFlag
            },
            headers: headers,
            responseType: 'arraybuffer'
        }
    );
    return decryptData(buf);
};
