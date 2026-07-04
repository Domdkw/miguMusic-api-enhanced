import { h5fetch } from '../utils/h5fetch';

export const getMvHls = async (
    mvContentId: string, 
    mvCopyrightId: string, 
    url: string,
    size: number|string,
    format: string = '050012',
    needHttps: boolean = true,
) => {
    size = size.toString();
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
