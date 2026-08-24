import { h5fetch } from '../utils/h5fetch';

/**
 * 获取页面滚动列表
 * @param dataId 数据id
 * @param page 页码
 * @param size 每页数量
 * @param styleCode 样式code
 * @returns 列表
 */
export const getPageScroll = async (dataId: string, page: number = 1, size: number = 20, styleCode?: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/page-view-datasource/v1.0`
        ,{
            params: {
                dataId,
                "pageNum": page,
                "pageSize": size,
                "styleCode": styleCode || undefined
            }
        }
    );
};
