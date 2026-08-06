import { h5fetch } from '../utils/h5fetch';

/**
 * 移动端获取页面信息
 * @param pageId 页面ID (二选一)
 * @param sceneId 场景ID (二选一)
 * @returns
 */
export const getPageInfo = async (pageId?: string, sceneId?: string) => {
    if (!pageId && !sceneId) {
        return {success: false, data: {error: 'pageId or sceneId is required'}}
    }
    if (pageId && sceneId) {
        return {success: false, data: {error: 'choose pageId or sceneId to get page info'}}
    }
    const base = 'https://app.c.nf.migu.cn/bmw'
    if (pageId) return await h5fetch(`${base}/page-info/v1.0?pageId=${pageId}`);
    if (sceneId) return await h5fetch(`${base}/page/view/v1.0?columnId=${sceneId}`);
};
