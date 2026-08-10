import { h5fetch } from '../utils/h5fetch';

/**
 * 分享通用内容
 * @param resourceType 资源类型 2:歌曲 2021:歌单 2003:专辑 2002:歌手
 * @param contentId 内容id 歌曲contentId / albumId / artistId / playlistId
 * @param contentName 歌曲名称 / 专辑名称 / 歌手名称 / 播放列表名称
 * @param targetUserName 当前歌单作者/歌手名称 （可选）
 * @param copyrightId 歌曲版权id （可选）
 * @returns 分享信息 (url)
 */
export const shareCommon = async (resourceType: string, contentId: string, contentName: string, targetUserName?: string, copyrightId?: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/v1.0/content/shareInfo.do`
        ,{params: {
            "appId": "music",
            resourceType,
            contentId,
            contentName,
            targetUserName,
            copyrightId: copyrightId || undefined,
            specialType: resourceType === '2003' ? '2' : undefined,
        }}
    );
};
