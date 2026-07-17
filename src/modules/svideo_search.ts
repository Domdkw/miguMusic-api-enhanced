import { h5fetch } from '../utils/h5fetch';
import { getDeviceId } from '../utils/deviceID'

export const searchSVideo = async (text: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/hot-search/search/videos/v1.0?pageIndex=${page}&text=${text}`
        ,{
            headers: {
                'deviceid': getDeviceId(),
            }
        }
    );
};
