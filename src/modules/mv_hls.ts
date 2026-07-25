import { h5fetch } from '../utils/h5fetch';

/**
 * 获取mv hls url
 * 
 * @param mvContentId mv id
 * @param mvCopyrightId mv copyrightId
 * @param url mv url (url接口返回)
 * @param size mv size (url接口获取)
 * @param format mv format (url接口获取)
 * @param needHttps 是否需要https (默认true)
 * @returns 
 */
export const getMvHls = async (
    mvContentId: string, 
    mvCopyrightId: string, 
    url: string,
    size: number,
    format: string = '050012',
    needHttps: boolean = true,
) => {
    url = encodeURIComponent(url);
    return await h5fetch(
        `https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/mvplayinfo.do?format=${format}&mvContentId=${mvContentId}&mvCopyrightId=${mvCopyrightId}&needHttps=${needHttps}&size=${size}&url=${url}`
    ,{
        method: 'GET',
        headers: {
            'Channel': '014021I',
        },
    });
};
