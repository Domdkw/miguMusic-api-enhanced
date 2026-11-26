import { h5fetch } from '../utils/h5fetch';
import type { ApiResponse } from '../types/api';
import type { ImgItem } from '../types/base';

/** 歌单匹配的歌曲信息 */
interface MatchSong {
    miguSongId: string;
    miguSongName: string;
    miguArtists: Array<{
        artistId: string;
        artistName: string;
    }>;
    contentId: string;
    copyright: string;
    songImages: ImgItem[];
    includeSQ: boolean;
}

/** 歌单匹配失败的歌曲 */
interface MatchFailSong {
    songId: string;
    songName: string;
    artists: string[];
}

/** 歌单匹配的原歌单信息 */
interface MatchPlaylistInfo {
    site: string;
    name?: string;
    description?: string;
    logo?: string;
    collectNum?: number;
    commentNum?: number;
    playNum?: number;
    userId?: string;
    userName?: string;
}

/** 歌单匹配数据 */
interface MatchPlaylistData {
    playListInfo: {
        list: MatchPlaylistInfo[];
    };
    successSongs: MatchSong[];
    noCopyrightSongs: MatchSong[];
    haveCopyrightSongs: MatchSong[];
    failSongs: MatchFailSong[];
    successCount: number;
    failCount: number;
}

export type MatchPlaylistResponse = ApiResponse<MatchPlaylistData>;

export const matchPlaylist = async (url: string): Promise<MatchPlaylistResponse> => {
    url = encodeURIComponent(url);
    return await h5fetch(`https://c.musicapp.migu.cn/v1.0/content/get-import-songList?url=${url}`);
};
