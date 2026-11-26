import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SingerTabHeader } from '../types/search';

/** 歌手索引 tab 的单个入口 */
interface SingerTabItem {
    view: string;
    txt?: string;
    txt2?: string;
    refreshTips?: string;
    action?: string;
}

/** 歌手索引 tab 分组 */
interface SingerTabGroup {
    view: string;
    contents: SingerTabItem[];
}

/** 歌手索引 tab 数据 */
interface SingerTabData {
    header: SingerTabHeader;
    contents: SingerTabGroup[];
}

export type SearchSingerTabResponse = ApiResponse<SingerTabData>;

export const getSearchSingerTab = async (): Promise<SearchSingerTabResponse> => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/bmw/singer-index/tabs/v2.0`);
};
