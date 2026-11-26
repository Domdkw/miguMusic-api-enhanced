import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';
import type { OpNumItem } from '../types/opNum';

/** 专辑标签 */
interface AlbumTag {
    resourceType: string;
    tagId: string;
    tagName: string;
    tagDesc: string;
    level: string;
    tagPath: string;
    tagPathName: string;
}

/** 专辑详情 */
interface AlbumInfo {
    resourceType: string;
    albumId: string;
    imgItems: ImgItem[];
    title: string;
    singer: string;
    singerId: string;
    singerImgs: ImgItem[];
    summary: string;
    totalCount: string;
    publishTime: string;
    publishCorp: string;
    opNumItem: OpNumItem;
    tags: AlbumTag[];
    albumAliasName: string;
    albumClass: string;
    language: string;
    publishCompany: string;
    publishDate: string;
    showTime: string;
    audioBookColumn: string;
    status: string;
}

export type AlbumInfoResponse = ApiResponse<AlbumInfo>;

export const getAlbumInfo = async (albumId: string): Promise<AlbumInfoResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/album/v2.0?albumId=${albumId}`);
};
