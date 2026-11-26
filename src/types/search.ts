import type { SongItem } from './base';

/** 搜索筛选项 */
export interface SearchCondition {
    id: string;
    title: string;
    type: string;
    datas: Array<{
        title: string;
        conditionType: string;
    }>;
}

/** 搜索列表分页数据通用结构 */
export interface SearchResultData<T> {
    hasNext: boolean;
    items: T[];
    conditions?: SearchCondition[];
    seq?: string;
}

/** 搜索结果的 song 字段 */
export interface SearchSong extends SongItem {
    track: string;
    downloadTags: string[];
    hasAssociatedRing: boolean;
    chorusStartTime: string;
    searchTags: Array<{
        name: string;
        type: string;
    }>;
    highlights: string[];
    /** 同名/相关歌曲 */
    more?: SearchSong[];
}

/** MV / 视频搜索结果的 user 字段 */
export interface SearchVideoUser {
    type: number;
    nickName: string;
    videoUserId: string;
    avatar: string;
    isSupportSubscribe: number;
}

/** 歌手索引 tab 的分组信息（tab 页与 tab 列表页共用） */
export interface SingerTabHeader {
    title: string;
    dataVersion: string;
    nextPageNo: number;
    nextPageNo2: number;
    update: boolean;
}
