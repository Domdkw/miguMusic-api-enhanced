/**
 * modules 子目录统一入口
 * 汇总导出所有 API 函数
 */
export { searchSong } from './search';
export { searchAlbum } from './search_album';
export { searchSinger } from './search_singer';
export { searchConcert } from './search_concert';
export { getSearchHot } from './search_hot';
export { getSearchDefault } from './search_default';
export { searchVideo } from './search_video';
export { searchSuggest } from './search_suggest';
export { searchRbt } from './search_rbt';
export { searchTicket } from './search_ticket';
export { getSearchSingerTab } from './search_singerTab';
export { getSearchSingerTabList } from './search_singerTab_list';
export { getAlbumInfo } from './album_info';
export { getAlbumSong } from './album_song';
export { getPlaylistInfo } from './playlist_info';
export { getPlaylistSong } from './playlist_song';
export { getSingerIndex } from './singer_index';
export { getSingerSong } from './singer_song';
export { getSingerAlbum } from './singer_album';
export { getRankIndex } from './rank_index';
export { getRankInfo } from './rank_info';
export { getRecommendPlaylist } from './recommend_playlist';
export { getSceneRecommend } from './recommend_song';
export { getRadioRecommend } from './recommend_radio';
export { getComment } from './comment';
export { getResourceInfo } from './resourceinfo';
export { checkCanListen } from './can-listen';
export { getOpNum } from './opNum';
export { getUrlV1 } from './url_v1';
export { getUrlV2 } from './url_v2';
export { getUrlH5V24 } from './url_h5v2.4';
export { getVersion } from './version';
export { getMvInfo } from './mv_info';
export { getMvHls } from './mv_hls';
export { loginNP } from './login_np';
export { checkToken } from './passport_checkToken';
export { getPacmToken } from './passport_pacmtoken';
export { getTicketInfo } from './ticket';
export { getUserBadge } from './user_badge';
export { queryUserInfo } from './user_queryInfo';
export { getUserHomePage } from './user_homePage';
export { getTodayRecommend } from './user_recom_today';
