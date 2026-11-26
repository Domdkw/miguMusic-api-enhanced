import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SingerTabHeader } from '../types/search';

/** 歌手索引 tab 列表条目 */
interface SingerTabListItem {
    view: string;
    viewId: string;
    action: string;
    resType: string;
    resId: string;
    track: string;
    txt: string;
    txt2: string;
    txt3: string;
    txt4: string;
    img: string;
}

/** 歌手索引 tab 列表数据 */
interface SingerTabListData {
    header: SingerTabHeader;
    contents: SingerTabListItem[];
}

export type SearchSingerTabListResponse = ApiResponse<SingerTabListData>;

export const getSearchSingerTabList = async (tab: string = ''): Promise<SearchSingerTabListResponse> => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/list/v1.0?tab=${tab}&templateVersion=3`);
};
