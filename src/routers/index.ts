import { Hono } from 'hono';

import searchService from './search.service';
import albumService from './album.service';
import playlistService from './playlist.service';
import rankService from './rank.service';
import recommendService from './recommend.service';
import singerService from './singer.service';
import urlService from './url.service';
import passportService from './passport.service';
import resourceService from './resource.service';
import mvService from './mv.service';
import userService from './user.service';
import actionService from './action.service';


const routes = new Hono();

const services = [
    searchService,
    albumService,
    playlistService,
    rankService,
    recommendService,
    singerService,
    urlService,
    passportService,
    resourceService,
    mvService,
    userService,
    actionService,
];

services.forEach(register => register(routes));

export default routes;
