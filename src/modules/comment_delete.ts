import { ckfetch } from '../utils/h5fetch';

/**
 * 删除评论
 * @param pacmtoken 用户token
 * @param resourceId 评论id
 * @returns 删除结果，包含新pacmtoken
 */
export const deleteComment = async (pacmtoken: string, resourceId: string) => {
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/delComment.do`
        ,{
            method: 'GET',
            params: {resourceId, hasAudited: "false"},
            cookie: { pacmtoken },
            headers: {
                "channel": "0146891",
                'Content-Type': 'application/json'
            }
        }
    );
    return { data, newPacmToken: cookies.pacmtoken || '' };
};
