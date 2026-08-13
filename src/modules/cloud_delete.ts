// 2026年8月12日 ver:7.41.13
// author: Domdkw
// method: DELETE!
// no proxy (for safety)

import { ckfetch } from '../utils/h5fetch';

/**
 * 删除云盘音乐
 * @param pacmtoken 用户token
 * @param contentIds 云盘音乐contentId列表 逗号分隔
 * @returns 地址和新的pacmtoken
 */
export const deleteCloudMusic = async (pacmtoken: string, contentIds: string) => {
    const contentList = contentIds.split(',');
    if (contentList.length === 0 || contentList.length > 100) {
        return {data:{success:false,error:'contentIds is empty or more than 100'},newPacmToken:undefined};
    }
    const deleteSongInfos = contentList.map((item) => ({
      "contentId": item,
      "type": "0"
    }));


    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/user/cloud/music/local/v1.0', {
        method: 'DELETE',
        body: JSON.stringify(deleteSongInfos),
        cookie: { pacmtoken },
        headers: { "channel": "0146931","Content-Type":"application/json"},
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};