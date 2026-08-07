import { h5fetch } from '../utils/h5fetch';

/**
 * 用户关注视彩号列表
 * @param userId 用户ID
 * @param page 分页
 * @returns 关注列表
 */
export const getFollowingVra = async (userId: string, page: number = 1) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/page-data/vrbt/follow-videouserlist/v2.0`
        ,{params: {
            offset: page - 1,
            templateVersion: 1,
            uid: userId
        }}
    );
};
