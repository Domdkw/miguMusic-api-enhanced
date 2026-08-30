import { postTv } from "../../utils/tv2";
import { tvQuality } from "../../utils/quality";

/**
 * 获取tv歌曲信息
 * @param contentId 歌曲内容ID
 * @param songId 歌曲ID
 * @returns 歌曲信息
 */
export async function getSongInfo(contentId: string, songId: string, toneFlag?: string) {
    const res = await postTv({contentId, songId, toneFlag}, "tvMusicSongFileService", "2.0");
    if(!res.success)
        return res;
    const toneList = res.data.musicSongListVo, toneKey = ['hq', 'nq', 'sq'];
    let oriUrl = '';
    for(const key of toneKey){
        oriUrl = toneList[key]?.url || '';
        if(oriUrl){
            break;
        }
    }
    res.data.url = encodeURI(tvQuality.changeQuality(oriUrl, toneFlag || 'PQ', true)||'');
    res.data.songItem = res.data.musicSongListVo;
    delete res.data.musicSongListVo;
    return res;
}
// 测试
//console.log(await getSongInfo("600913000002886836", "1114323823"));
