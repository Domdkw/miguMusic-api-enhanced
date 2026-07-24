import { h5fetch } from '../utils/h5fetch';

/**
 * 获取短视频用户信息
 * @param type uid 或 videoUserId
 * @param uid 视频用户uid
 * @param videoUserId 视频用户id
 * @returns 短视频用户信息
 */
export const getSVideoUserInfo = async (type: string, uid: string = '', videoUserId: string = '') => {
    let url = 'https://app.c.nf.migu.cn/resource/video-user';
    if (type === 'uid') {
        url += `/by-uid/v1.0?uid=${uid}`;
    } else if (type === 'videoUserId') {
        url += `/by-id/v1.0?videoUserId=${videoUserId}`;
    }else{
        return { error: 'Invalid parameter type', success: false };
    }
    return h5fetch(url);
};
