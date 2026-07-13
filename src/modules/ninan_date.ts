import { h5fetch } from '../utils/h5fetch';

export const getNinanByDate = async (date: string) => {
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v2.0/content/getNinanByDate.do?columnTitle=${date}`);
};
