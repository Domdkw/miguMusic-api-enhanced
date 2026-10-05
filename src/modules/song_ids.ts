import { h5fetch } from '../utils/h5fetch';

/**
 * (purchase接口) 通过songId 获取快速歌曲的 price, contentId, copyrightId
 * @param songId 歌曲ID
 * @param channel 渠道ID 可选，默认014X031 (h5)
 * @returns 歌曲ID信息
 */
export const getSongIds = async (songId: string, channel: string = "014X031") => {
    const res = await h5fetch(`https://app.c.nf.migu.cn//strategy/song-purchase/status/v1.0`
        ,{
            params: { songId },
            headers: {
                "ua": "Android_migu",
                channel
            }
        }
    );
    let actionUrl = res.data.actionUrl
    if (!actionUrl) 
        return res;
    actionUrl = actionUrl.split("?")[1].split("&").map((item: string) => item.split("="));
    res.data = { ...res.data, ...Object.fromEntries(actionUrl) };
    return res;
};