import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 按标签获取歌单的条目 */
interface SquareListByTagItem {
    template: string;
    playNum: string;
    actionUrl: string;
    title: string;
    subTitle: string;
    track: string;
    logEvent: {
        contentId: string;
        contentName: string;
        contentType: string;
        index: string;
        subContentId: string;
        subContentType: string;
    };
    imageUrl: string;
    playlistId: string;
}

/** 按标签获取歌单的数据 */
interface SquareListByTagData {
    nextPageUrl: string;
    enablePullRefresh: boolean;
    contentItemList: SquareListByTagItem[];
    hasNext: boolean;
}

export type SquareListByTagResponse = ApiResponse<SquareListByTagData>;

/**
 * 歌单广场：根据标签获取歌单
 * @returns
 */
export const getSquareListByTag = async (tagId: string, page: number): Promise<SquareListByTagResponse> => {
    const res = await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/musiclistplaza-listbytag?templateVersion=1&tagId=${tagId}&pageNumber=${page}`);
    res.data.contentItemList = res?.data?.contentItemList?.itemList?.reduce((acc: Record<string, any>[], item: Record<string, any>) => {
        if (!item.actionUrl || !item.actionUrl.includes('song-list-info')) {
            return acc;
        }
        item.playlistId = item.actionUrl.split('id=')[1].split('&')[0] || '';
        acc.push(item);
        return acc;
    }, []) as SquareListByTagItem[] || [];
    res.data.hasNext = res.data.contentItemList.length < 30 ? false : res?.data?.nextPageUrl !== undefined && res?.data?.nextPageUrl !== '';
    return res;
};
