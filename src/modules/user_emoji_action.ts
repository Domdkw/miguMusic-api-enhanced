import { ckfetch } from '../utils/h5fetch';

/**
 * 歌曲enoji表态
 * @param pacmtoken 用户token
 * @param contentId 歌曲id
 * @param emojiId 表情id
 * @param action 表情操作
 * @returns 表情数量，包含新pacmtoken
 */
export const emojiAction = async (pacmtoken: string, contentId: string, emojiId: string, action: string) => {
    if(action !== 'add' && action !== 'cancel') {
        return { data:{success: false, error: 'action必须是add或cancel'}, newPacmToken: ''};
    }
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/user/api/resource-react-emoji/add-cancel/v1.0`, {
        method: 'POST',
        cookie: { pacmtoken },
        body: JSON.stringify({
            "resourceId": contentId,
            "resourceType": "2",
            "emojiId": emojiId,
            "operType": action
        }),
        headers: {'Content-Type': 'application/json'}
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};