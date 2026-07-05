import { h5fetch } from '../utils/h5fetch';
import { getDeviceId } from '../utils/deviceID'

export const getSceneRecommend = async (scene: string = 'TODAY_RECOMMEND', size: number = 10) => {
    let params = '';
    if (scene === 'PRIVATE_FM') {
         params = 'scene=PRIVATE_FM&algorithm=v1&action=1';//不支持size参数，始终返回5条
    } else if (scene === 'TODAY_RECOMMEND') {
        params = `scene=TODAY_RECOMMEND&action=1&size=${size}`;//&algorithm=v1
    }else{
        return {error:'scene参数错误'};
    }
    return await h5fetch(`https://app.c.nf.migu.cn/pc/resource-dataloader/recommend-song/v1.0?${params}`
        ,{
            headers: {
                "deviceId": getDeviceId()
            }
        }
    );
};
