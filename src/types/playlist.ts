import type { OpNumItem } from './opNum';

/** 歌单信息（歌单详情与歌单搜索结果共用） */
export interface PlaylistInfo {
    resourceType: string;
    title: string;
    musicListId: string;
    publishTime: string;
    imgItem: {
        img: string;
        imgOri: string;
        webpImg: string;
    };
    originalImgUrl: string;
    ownerId: string;
    ownerName: string;
    musicNum: number;
    opNumItem: OpNumItem;
    havePrivatePic: string;
    type: string;
    ownerPic: string;
    status: number;
    userIdentityInfoItems: unknown[];
    channel: string;
    createTime: string;
}
