import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 歌单广场推荐歌单日志信息 */
interface SquareRecommendLogEvent {
    index: string;
    contentId: string;
    contentName: string;
    contentType: string;
    subContentType: string;
    subContentId: string;
    resourceId: string;
    resourceType: string;
    trackId: string;
    boxName: string;
}

/** 歌单广场推荐歌单条目 */
interface SquareRecommendPlaylist {
    view: string;
    style: string;
    viewId: string;
    action: string;
    logEvent: SquareRecommendLogEvent;
    resType: string;
    resId: string;
    track: string;
    img: string;
    txt: string;
    txt2: string;
}

/** 歌单广场推荐歌单数据 */
interface SquareRecommendData {
    title: string;
    pageNum: number;
    specialPerTip: string;
    playLists: SquareRecommendPlaylist[];
}

export type SquareRecommendResponse = ApiResponse<SquareRecommendData>;

/**
 * 网页v5 歌单广场推荐歌单 (5个)
 * @returns
 */
export const getSquareRecommend = async (): Promise<SquareRecommendResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/playlist-square/recommend-playlist/v1.0?templateVersion=2`);
};
