import { h5fetch } from '../utils/h5fetch';

/** 通过contentId获取歌曲详情
 * @param contentIds 歌曲ID列表，多个ID用,分隔 600919000007791840,600929000001520013
 */
export const getSongInfoByContentIds = async (contentIds: string) => {
    contentIds = contentIds.replace(/,/g, '|');
    return await h5fetch(`https://app.c.nf.migu.cn/resource/song/by-contentids/v2.0?contentId=${contentIds}`);
};

/** 通过songId获取歌曲详情
 * @param songId 歌曲ID列表，多个ID用,分隔
 */
export const getSongInfoBySongIds = async (songId: string) => {
    songId = songId.replace(/,/g, '|');
    return await h5fetch(`https://app.c.nf.migu.cn/resource/song/by-songids/v2.0?songId=${songId}`);
};