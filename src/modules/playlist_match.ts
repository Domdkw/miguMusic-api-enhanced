import { h5fetch } from '../utils/h5fetch';

export const matchPlaylist = async (url: string) => {
    url = encodeURIComponent(url);
    return await h5fetch(`http://c.musicapp.migu.cn/v1.0/content/get-import-songList?url=${url}`);
};
