import { h5fetch } from '../utils/h5fetch';

type MusicParams = {
    type: 'music';
    userId: string;
    page?: number;
    size?: number;
}
type VrbtParams = {
    type: 'vrbt';
    userId?: string;
    videoUserId: string;
} | {
    type: 'vrbt';
    userId: string;
    videoUserId?: string;
}

export type FollowerListParams = MusicParams | VrbtParams;

/**
 * 获取粉丝列表
 * @description 不同类型返回值格式不同
 * @param params 参数 
 * @param params.type 类型，music或vrbt
 * @param params.userId 用户ID
 * @param params.videoUserId 视频用户ID
 * @param params.page 页码
 * @param params.size 每页数量
 * @returns 粉丝列表
 */
export const getFollowerList = async (params: FollowerListParams) => {
    if (params.type === 'music') return await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/v1.0/user/follower.do`
        ,{params: {
                pageNo: params.page || 1,
                pageSize: params.size || 20,
                userId: params.userId,
        }}
    );
    if (params.type === 'vrbt') {
        if (!params.userId && !params.videoUserId) return {
            success: false,
            error:'userId or videoUserId is required',
        };
        return await h5fetch(`https://app.c.nf.migu.cn/user/i/social/fans-list/v1.0`
            ,{params: {
                    userId: params.userId,
                    videoUserId: params.videoUserId,
            }}
        );
    }
};
