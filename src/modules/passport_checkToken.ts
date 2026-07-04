import { h5fetch } from '../utils/h5fetch';

export const checkToken = async (token: string = '') => {
    return await h5fetch(
        `https://c.musicapp.migu.cn/mgateway/api/checkPacMtoken`,
        {
            headers: {
                "pacmtoken": token
            }
        }
    );
};
