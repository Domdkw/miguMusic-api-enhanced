import { h5fetch } from '../utils/h5fetch';

export const searchSuggest = async (text: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/search/suggest/v1.0?text=${text}`);
};
