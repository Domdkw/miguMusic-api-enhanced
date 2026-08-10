import { ckfetch } from '../utils/h5fetch';

/**
 * 添加用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param type 收藏类型 playlist:歌单 comment:评论 album:专辑
 * @param contentId 歌单id / 评论id / 专辑id
 * @param title 歌单标题 / 专辑标题 （type=playlist或album时必填）
 * @param userId 用户id （type=comment时必填）
 * @returns 添加结果和新的pacmtoken
 */
export const addUserCollect = async (pacmtoken: string, type: string, contentId: string, title?: string, userId?: string) => {
    let jsonParams: object = {};
    if (type === 'playlist') {
        jsonParams = {
            outOPType: "03",
            outResourceType: "2021",
            outResourceId: contentId,
            outResourceName: encodeURIComponent(title || ''),
        };
    } else if (type === 'comment') {
        jsonParams = {
            outOPType: "08",
            outResourceType: "3002",
            outOwner: userId,
            outResourceId: contentId,
            outResourceName: "%E8%AF%84%E8%AE%BA", //=评论
        };
    } else if (type === 'album') {
        jsonParams = {
            outOPType: "03",
            outResourceType: "2003",
            outResourceId: contentId,
            outResourceName: encodeURIComponent(title || ''),
        };
    } else {
        return {success: false,err:'未知type类型 -playlist或comment或album'};
    }

    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/add_collection.do`
        ,{ params: jsonParams, cookie: { pacmtoken } }
    );

    return { data, newPacmToken: cookies.pacmtoken || '' };
};