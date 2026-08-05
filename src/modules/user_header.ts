import { h5fetch } from '../utils/h5fetch';

/**
 * 用户简介
 * @param userId 用户id
 * @returns 用户简介
 */
export const getUserHeader = async (userId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/user/api/my-page-header/v1.0`
        ,{params: { userId }}
    )
};