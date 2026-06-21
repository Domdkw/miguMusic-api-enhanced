import { Hono } from 'hono';

// 导入所有路由模块
import searchSong from './search';
import searchArtist from './search_singer';
import searchAlbum from './search_album';
import searchHot from './search_hot';
import searchDefault from './search_default';
import searchAll from './search_all';
import albumInfo from './album_info';
import albumSong from './album_song';
import canListen from './can-listen';
import comment from './comment';
import opNum from './opNum';
import playlistInfo from './playlist_info';
import playlistSong from './playlist_song';
import rankIndex from './rank_index';
import rankInfo from './rank_info';
import recommendPlaylist from './recommend_playlist';
import recommendSong from './recommend_song';
import resourceinfo from './resourceinfo';
import searchSingerTab from './search_singerTab';
import searchSingerTabList from './search_singerTab_list';
import singerAlbum from './singer_album';
import singerIndex from './singer_index';
import singerSong from './singer_song';
import urlV1 from './url_v1';
import urlV2 from './url_v2';
import urlH5v2 from './url_h5v2.4';
import version from './version';



/**
 * API 路由聚合
 * 统一管理所有 API 路由
 */
const routes = new Hono();

// 注册所有路由模块
const routeModules = [
    searchSong,
    searchArtist,
    searchAlbum,
    searchHot,
    searchDefault,
    searchAll,
    searchSingerTab,
    searchSingerTabList,
    albumInfo,
    albumSong,
    canListen,
    comment,
    opNum,
    playlistInfo,
    playlistSong,
    rankIndex,
    rankInfo,
    recommendPlaylist,
    recommendSong,
    resourceinfo,
    singerAlbum,
    singerIndex,
    singerSong,
    urlV1,
    urlV2,
    urlH5v2,
    version,
];

// 遍历并注册所有路由
routeModules.forEach(registerRoutes => registerRoutes(routes));

export default routes;