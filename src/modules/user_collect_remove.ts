import { ckfetch } from '../utils/h5fetch';

/**
 * 删除用户收藏
 * @param pacmtoken 用户pacmtoken
 * @param type 收藏类型 playlist:歌单 comment:评论 album:专辑
 * @param contentId 歌单id / 评论id / 专辑id
 * @param userId 用户id （type=comment时必填）
 * @returns 删除结果和新的pacmtoken
 */
export const removeUserCollect = async (pacmtoken: string, type: string, contentId: string, userId?: string) => {
    let jsonParams: object = {};
    if (type === 'playlist') {
        jsonParams = {
            OPType: "03",
            resourceType: "2021",
            resourceId: contentId,
        };
    } else if (type === 'comment') {
        jsonParams = {
            OPType: "08",
            resourceType: "3002",
            outOwner: userId,
            resourceId: contentId,
        };
    } else if (type === 'album') {
        jsonParams = {
            OPType: "03",
            resourceType: "2003",
            resourceId: contentId,
        };
    } else {
        return {success: false,err:'未知type类型 -playlist,comment或album'};
    }

    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/user/del_collection.do`
        ,{ params: jsonParams, cookie: {pacmtoken} }
    );

    return { data, newPacmToken: cookies.pacmtoken || '' };
};