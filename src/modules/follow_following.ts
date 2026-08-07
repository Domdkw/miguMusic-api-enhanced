import { h5fetch } from '../utils/h5fetch';

/**
 * 获取关注列表
 * @param userId 用户ID
 * @param type 关注类型，user或singer
 * @param page 页码
 * @param size 每页数量
 * @returns 关注列表
 */
export const getFollowingList = async (userId: string, type: string, page: number = 1, size: number = 20) => {
    if (!userId) return {success: false,data:{error:'userId is required'}};
    if (type!=='user'&&type!=='singer') return {success: false,data:{error:'type is invalid'}};

    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/v1.0/user/followingSingers.do`
        ,{params: {
            "pageNo": page,
            "pageSize": size,
            "userId": userId,
            "userType": type === 'singer' ? '1' : '2'
        }}
    );
};
