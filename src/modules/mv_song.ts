import { h5fetch } from '../utils/h5fetch';

/**
 * 获取歌曲的 MV 视频
 * @param songId 歌曲ID
 * @returns MV视频信息
 */
export const getMvBySong = async (songId: string) => {
    return await h5fetch(`https://app.c.nf.migu.cn/MIGUM2.0/strategy/mv-player/video/v1.0?songId=${songId}`
        ,{
            headers: {
                "channel": "0146921"
            }
        }
    );
};
