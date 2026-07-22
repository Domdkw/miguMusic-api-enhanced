import { h5fetch } from '../utils/h5fetch';

/**
 * 新碟上架
 * @returns 
 */
export const getNewCDList = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/v1.0/template/get-new-cd-list-header`);
};
