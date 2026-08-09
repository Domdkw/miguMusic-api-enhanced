import { ckfetch } from '../utils/h5fetch';
import type { AddUserCollect } from '../types/user';

/**
 * 添加用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param params params.playlistId 播放列表id
 * @param params.title 播放列表标题
 * @returns 添加结果和新的pacmtoken
 */
export const addUserCollect = async (pacmtoken: string, params: AddUserCollect.params) => {
    let jsonParams: object = {};
    if (params.type === 'playlist') {
        jsonParams = {
            outOPType: "03",
            outResourceType: "2021",
            outResourceId: params.playlistId,
            outResourceName: encodeURIComponent(params.title),
        };
    } else if (params.type === 'comment') {
        jsonParams = {
            outOPType: "08",
            outResourceType: "3002",
            outOwner: params.userId,
            outResourceId: params.commentId,
            outResourceName: "%E8%AF%84%E8%AE%BA", //=评论
        };
    } else {
        return {success: false,err:'未知type类型 -playlist或comment'};
    }

    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/add_collection.do`
        ,{ params: jsonParams, cookie: { pacmtoken } }
    );

    return { data, newPacmToken: cookies.pacmtoken || '' };
};