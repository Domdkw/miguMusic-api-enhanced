import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { SingerBrief } from '../types/base';
import type { OpNumItem } from '../types/opNum';

/** 铃声搜索结果的 song 字段 */
interface SearchCrbtSong {
    resourceType: string;
    contentId: string;
    songId: string;
    songName: string;
    copyrightId: string;
    copyrightType: number;
    ringToneId: string;
    ringCopyrightId: string;
    haveShockRing: number;
    relatedSongs: Array<{
        resourceType: string;
        resourceTypeName: string;
        copyrightId: string;
        productId: string;
    }>;
    duration: number;
    img1: string;
    img2: string;
    img3: string;
    singerList: SingerBrief[];
    highlights: string[];
    validTime: string;
    price: string;
    status: string;
    vipType: string;
    showLabels: Array<{
        type: string;
        text: string;
    }>;
    opNumItem: OpNumItem;
}

export type SearchCrbtResponse = ApiResponse<{
    hasNext: boolean;
    items: Array<{ song: SearchCrbtSong }>;
}>;

export const searchCrbt = async (text: string, page: number = 1): Promise<SearchCrbtResponse> => {
    const res = await h5fetch('https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/tone_search_all.do',
        {
            params: {
                pageNo: page ?? 1,
                text: text,
            }
        }
    );
    const items = res.data?.toneList.map((item: any) => {
        const rbt = item.rbtSongItem || {};
        const highlights = rbt.highLight || [];
        const singerList = (rbt.singer.split('|') || []).map((name: string) => ({
            "id": "",
            "name": name,
            "img": "",
            "nameSpelling": ""
        }));
        return { song: {
            "resourceType": rbt.resourceType,
            "contentId": rbt.contentId,
            "songId": rbt.songId,
            "songName": rbt.songName,
            "copyrightId": rbt.copyrightId,
            "copyrightType": parseInt(rbt.copyright),
            "ringToneId": rbt.contentId,
            "ringCopyrightId": rbt.copyrightId,
            "haveShockRing": 1,
            "relatedSongs": rbt.relatedSongs || [],
            "duration": 0,
            "img1": rbt.imgItems?.[0]?.img || "",
            "img2": rbt.imgItems?.[1]?.img || "",
            "img3": rbt.imgItems?.[2]?.img || "",
            "singerList": singerList,
            "highlights": highlights,
            // new
            validTime: rbt.validTime,
            price: rbt.price,
            status: rbt.status,
            vipType: rbt.vipType,
            showLabels: rbt.showLabels || [],
            opNumItem: rbt.opNumItem || {},
        }}
    }) || [];
    return {
        code: res.code,
        info: res.info,
        data: {
            hasNext: res.data?.toneList?.length === 30,
            items: items,
        },
    }
};
