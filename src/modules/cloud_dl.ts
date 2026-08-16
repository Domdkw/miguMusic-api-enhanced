// author: Domdkw
// 2026年8月16日
import { ckfetch } from '../utils/h5fetch';

/**
 * 获取云盘音乐下载地址
 * @param pacmtoken 用户token
 * @param contentId 云盘音乐contentId
 * @param toneFlag 音乐质量 默认PQ
 * @returns 地址和新的pacmtoken
 */
export const getCloudDLUrl = async (pacmtoken: string, contentId: string, toneFlag: string = 'PQ') => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/MIGUM3.0/strategy/cloud/download-url/v1.0', {
        cookie: { pacmtoken },
        headers: { "channel": "0146931", "version": "7.41.13"},
        params: {
            contentId,
            "formatType": toneFlag,
            "type": "0"
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};