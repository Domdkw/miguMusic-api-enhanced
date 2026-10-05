import { ckfetch } from '../utils/h5fetch';

/**
 * 添加神评
 * @param commentId 评论id
 * @param pacmtoken 用户token
 * @returns 添加结果，包含新pacmtoken
 */
export const addEpicComment = async (
    commentId: string,
    pacmtoken: string,
) => {
    const { data, cookies } = await ckfetch(`https://app.c.nf.migu.cn/user/api/comment/add-recommend/v1.0`
        ,{
            method: 'POST',
            body: JSON.stringify({ commentId }),
            cookie: { pacmtoken },
            headers: {
                "channel": "0146891",
                'Content-Type': 'application/json'
            }
        }
    );
    return { data, newPacmToken: cookies.pacmtoken || '' };
};
