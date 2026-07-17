import { h5fetch } from '../utils/h5fetch';

export const getSVideoSearchSuggest = async (text: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/resource-dataloader/search-suggest/search/v1.0?text=${text}`);
};
