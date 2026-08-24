import { h5fetch } from '../utils/h5fetch';

/**
 * 通过dataId获取固定起始界面
 * @param body object[] 请求体
 * @example [{
    "dataId": "68ed86c54e4f49d0a8b8d963805ced7d",
    "limit": 9, // 可选，建议使用原pageinfo的值
    "styleCode": "com_s_column_title_style_v1"
    }]
 * @returns 主页面 + 子页面
 */
export const getPageDataSource = async (body: object[]) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/page-datasource/v3.0`
        ,{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json','recommendstatus': '1'}
        }
    );
};
