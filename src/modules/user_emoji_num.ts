import { ckfetch } from '../utils/h5fetch';

/**
 * 获取歌曲表情数量
 * @param pacmtoken 用户token (可选，传入可看是否发表过表情)
 * @param contentIds 歌曲id列表 (逗号分隔)
 * @returns 表情数量，包含新pacmtoken
 */
export const getEmojiNum = async (pacmtoken: string, contentIds: string) => {
    const contentIdList = contentIds.split(',');
    if(contentIdList.length === 0 || contentIdList.length > 100) {
        return { data:{success: false, error: 'contentIdList长度必须在1-100之间'}, newPacmToken: ''};
    }

    const resourceModuleQueryParam = contentIdList.map(id => ({
      "emojiNum": 6,
      "resourceId": id,
      "resourceType": "2"
    }))
    
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/user/api/resource-module/query/v1.0`, {
        method: 'POST',
        cookie: pacmtoken ? { pacmtoken } : undefined,
        body: JSON.stringify( {resourceModuleQueryParam} ),
        headers: {'Content-Type': 'application/json'}
    });

    return { data, newPacmToken: pacmtoken ? cookies.pacmtoken || '' : undefined};
};