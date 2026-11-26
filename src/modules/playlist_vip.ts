import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';

/** VIP 热歌条目 */
interface VipPlaylistItem {
    resType: string;
    resId: string;
    img: string;
    txt: string;
    txt2: string;
    txt3: string;
    vip: string;
    qualities: string[];
    showTag: string[];
    copyright: string;
    copyrightId: string;
    songId: string;
    tagIds: string[];
    copyrightType: string;
    audioType: string;
}

export type VipPlaylistResponse = ApiResponse<VipPlaylistItem[]>;

/**
 * VIP 热歌
 * @param size 数量
 * @returns
 */
export const getVipPlaylist = async (size: number = 10): Promise<VipPlaylistResponse> => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/vip-exclusive/auditions-list/v1.0?pageSize=${size}`);
};
