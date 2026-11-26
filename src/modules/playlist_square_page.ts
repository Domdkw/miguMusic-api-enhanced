import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 页面头部信息 */
interface PageHeader {
    dataVersion: string;
    nextPageNo: number;
    nextPageNo2: number;
    title: string;
    update: boolean;
}

/** 歌单广场页面条目 */
interface SquarePageItem {
    img: string;
    img2: string;
    logEvent: {
        resourceId: string;
        resourceType: string;
        trackId: string;
    };
    refreshTips: string;
    txt: string;
    txt4: string;
    view: string;
    viewId: string;
}

/** 歌单广场页面二级分组 */
interface SquarePageGroup {
    columnId: string;
    title: string;
    view: string;
    viewId: string;
    contents: SquarePageItem[];
}

/** 歌单广场页面一级分组 */
interface SquarePageSection {
    columnId: string;
    title: string;
    view: string;
    viewId: string;
    contents: SquarePageGroup[];
}

/** 歌单广场页面数据 */
interface SquarePageData {
    header: PageHeader;
    contents: SquarePageSection[];
}

export type SquarePageResponse = ApiResponse<SquarePageData>;

/**
 * 网页v5 歌单广场界面
 * @returns
 */
export const getSquarePage = async (): Promise<SquarePageResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/page-data/playlist-square-recommend/v1.0?templateVersion=2`);
};
