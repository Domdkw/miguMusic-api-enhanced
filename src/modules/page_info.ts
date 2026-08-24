import { h5fetch } from '../utils/h5fetch';

/**
 * 移动端获取页面信息
 * @param id 页面ID或场景ID
 * @param type 声明'pageId'或'sceneId'
 * @returns
 */
export const getPageInfo = async (id: string, type: string) => {
    if (!id && !type) {
        return {success: false, data: {error: 'id and type is required'}}
    }
    if (!['pageId', 'sceneId'].includes(type)) {
        return {success: false, data: {error: 'choose pageId or sceneId to get page info'}}
    }
    const base = 'https://app.c.nf.migu.cn/bmw', h = {headers:{recommendstatus: '1'}}
    if (type === 'pageId') return await h5fetch(`${base}/page-info/v2.0?pageId=${id}`, h); //also v1.0
    if (type === 'sceneId') return await h5fetch(`${base}/page/view/v1.0?columnId=${id}`, h);
};
