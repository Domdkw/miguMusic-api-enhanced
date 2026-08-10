import { h5fetch } from '../utils/h5fetch';

/**
 * 分享视频
 * @param resourceType 资源类型 6000:短视频 D:MV
 * @param contentId 视频id / MVid
 * @param userId 视频用户id （可选）
 * @returns 分享信息 (url)
 */
export const shareVideo = async (resourceType: string, contentId: string, userId?: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/resource/share-info/v2.0`
        ,{params:{
            "appId": "music",
            contentId,
            shareType: resourceType,
            uid: userId || undefined,
        }}
    );
};
