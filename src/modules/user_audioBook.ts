import { ckfetch } from '../utils/h5fetch';

/**
 * 我的听书记录
 * @param pacmtoken 用户token
 * @returns 用户听书记录信息和新的pacmtoken
 */
export const getUserAudioBook = async (pacmtoken: string, recentListenNum: number = 10, recommendNum: number = 5) => {
    const { data, cookies } = await ckfetch('https://pd.musicapp.migu.cn/bmw/audio-book/my-audio-book/v1.0', {
        cookie: { pacmtoken },
        headers: {"isMock": "00"},
        params: {
            "recentListenCount": recentListenNum,
            "recommendCount": recommendNum
        }
    });

    return { data, newPacmToken: cookies.pacmtoken || '' };
};