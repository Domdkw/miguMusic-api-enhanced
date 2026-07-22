import { h5fetch } from '../utils/h5fetch';

/** 检查是否可以播放 
 * @param contentIds 内容ID列表，逗号分隔
 * @return
*/
export const checkCanListen = async (contentIds: string) => {
    return await h5fetch(
        `https://app.c.nf.migu.cn/strategy/pc/can-listen/v1.0`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'channel': '014X031' // music.migu.cn
            },
            body: JSON.stringify({
                "contentIds": contentIds
            })
        }
    );
};
