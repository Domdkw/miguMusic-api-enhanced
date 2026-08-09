import { ckfetch } from '../utils/h5fetch';
import type { RemoveUserCollect } from '../types/user';

/**
 * 删除用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param params 删除收藏参数
 * @param params.type 收藏类型 -playlist或comment
 * @param params.playlistId 播放列表id
 * @param params.userId 用户id
 * @param params.commentId 评论id
 * @returns 删除结果和新的pacmtoken
 */
export const removeUserCollect = async (pacmtoken: string, params: RemoveUserCollect.params) => {
    let jsonParams: object = {};
    if (params.type === 'playlist') {
        jsonParams = {
            OPType: "03",
            resourceType: "2021",
            resourceId: params.playlistId,
        };
    } else if (params.type === 'comment') {
        jsonParams = {
            OPType: "08",
            resourceType: "3002",
            outOwner: params.userId,
            resourceId: params.commentId,
        };
    } else {
        return {success: false,err:'未知type类型 -playlist或comment'};
    }


    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/del_collection.do`
        ,{ params: jsonParams, cookie: {pacmtoken} }
    );

    return { data, newPacmToken: cookies.pacmtoken || '' };
};