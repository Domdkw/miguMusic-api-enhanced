import { h5fetch } from '../utils/h5fetch';

export const getSearchDefault = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/column/search/default-text/v3.0?resourceVersion=2`);
};
