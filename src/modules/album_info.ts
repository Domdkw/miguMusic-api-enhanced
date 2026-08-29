import { h5fetch } from '../utils/h5fetch';

export const getAlbumInfo = async (albumId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM3.0/resource/album/v2.0?albumId=${albumId}`);
};
