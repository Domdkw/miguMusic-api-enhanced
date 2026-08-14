// 2026年8月14日 ver:8.8.0
// author: Domdkw
// no proxy (for safety)

import { ckfetch } from '../utils/h5fetch';
import crypto from 'node:crypto';

/**
 * 上传到云盘
 * @param pacmtoken 用户token
 * @param file 音乐文件
 * @returns 地址和新的pacmtoken
 */
function getExt (file: File) {
    const index = file.name.lastIndexOf('.');
    if (index <= 0)  return '';
    return file.name.substring(index + 1).toLowerCase();
};
async function getHash (file: File) {
    const hash = crypto.createHash('md5');
    const reader = file.stream().getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        hash.update(value);
    }
    return hash.digest('hex');
};
export const getCloudUploadUrl = async (pacmtoken: string, file: File) => {
    const ext = getExt(file);
    if (!['mp3','wav','flac'].includes(ext)) {
        return {data:{success:false,error:'file ext is not supported'},newPacmToken:undefined};
    }
    const hash = await getHash(file), size = file.size;

    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/MIGUM3.0/user/cloud/meta/upload/v1.0', {
        method: 'POST',
        body: JSON.stringify([{
            "contentId": hash,
            "contentName": file.name,
            "contentSize": size,
            "needUpload": true
        }]),
        cookie: { pacmtoken },
        headers: { "channel": "0146931","Content-Type":"application/json"},
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};