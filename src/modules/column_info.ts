import { h5fetch } from '../utils/h5fetch';

/**
 * 栏目内容
 * @param columnId 栏目ID
 * @returns 
 */
export const getColumnInfo = async (columnId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/column/column-info/h5/v2.0?columnId=${columnId}`);
};
