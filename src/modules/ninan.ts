import { h5fetch } from '../utils/h5fetch';
import { ckfetch } from '../utils/h5fetch';

/**
 * 获取呢喃歌曲列表
 * @returns 呢喃歌曲列表
 */
export const getNinanSong = async () => await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/column/ninan/song-list/v1.0`);

/**
 * 获取某天的呢喃歌曲
 * @param date - 日期 格式为 YYYYMMDD
 * @returns 呢喃歌曲列表
 */
export const getNinanByDate = async (date: string) => await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v2.0/content/getNinanByDate.do?columnTitle=${date}`);

/**
 * 呢喃签到
 * @param pacmtoken - 用户认证 token
 * @returns 签到结果和新的 pacmtoken
 */
export const signNinan = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('http://c.musicapp.migu.cn/MIGUM2.0/v2.0/user/sign-reward',{
        cookie: { pacmtoken },headers: {
        "location-data": "30.6698676660,104.1229614820",
        "channel": "0146921",
    }});
    return {data,newPacmToken: cookies.pacmtoken || ''};
};

/**
 * 获取呢喃签到信息
 * @param pacmtoken - 用户认证 token
 * @returns 签到信息和新的 pacmtoken
 */
export const getNinanSignInfo = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('http://u.musicapp.migu.cn/MIGUM3.0/user/sign-center/v1.0',{
        cookie: { pacmtoken },headers: {
        'channel': '014021I'
    }});
    return { data,newPacmToken: cookies.pacmtoken || ''};
};
