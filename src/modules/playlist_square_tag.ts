import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** 歌单广场标签项 */
interface SquareTagItem {
    tagId: string;
    tagName: string;
}

/** 歌单广场更多标签分组 */
interface SquareMoreTag {
    title: string;
    tagList: SquareTagItem[];
}

/** 歌单广场标签数据 */
interface SquareTagData {
    contentItemList: SquareTagItem[];
    moreTag?: SquareMoreTag[];
}

export type SquareTagResponse = ApiResponse<SquareTagData>;

/**
 * 网页v5 歌单广场所有标签
 * @returns
 */
export const getSquareTag = async (needMoreTag: boolean = true): Promise<SquareTagResponse> => {
    const baseTag = await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/playlist-square/tab/v1.0`);
    if (!needMoreTag) {
        return baseTag;
    }
    const moreTag = await h5fetch(`https://app.c.nf.migu.cn/pc/v1.0/template/musiclistplaza-taglist/release`);
    baseTag.data.moreTag = moreTag.data.map((item: Record<string, any>) => {
        const title = item?.header?.title;
        const tagList = item?.content.map((it: Record<string, any>) => ({
            tagName: it.texts[0],
            tagId: it.texts[1],
        }))
        return { title, tagList }
    });
    return baseTag;
};
