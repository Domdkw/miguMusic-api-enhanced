import { Hono } from 'hono';

import searchService from './search.service';
import albumService from './album.service';
import playlistService from './playlist.service';
import recommendService from './recommend.service';
import singerService from './singer.service';
import urlService from './url.service';
import passportService from './passport.service';
import resourceService from './resource.service';
import mvService from './mv.service';
import userService from './user.service';
import actionService from './action.service';
import svideoService from './svideo.service';
import columnService from './column.service';


const routes = new Hono();

const services = [
    searchService,
    albumService,
    playlistService,
    recommendService,
    singerService,
    urlService,
    passportService,
    resourceService,
    mvService,
    userService,
    actionService,
    svideoService,
    columnService,
];

services.forEach(register => register(routes));

export default routes;
