import { h5fetch } from '../utils/h5fetch';

export const getNinanSong = async () => {
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/column/ninan/song-list/v1.0`);
};
