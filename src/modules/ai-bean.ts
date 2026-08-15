import { ckfetch } from '../utils/h5fetch';

/**
 * AI豆签到
 * @param pacmtoken - 用户认证 token
 * @returns 签到结果和新的 pacmtoken
 */
export const signAiBean = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/act-jbzx/sign',{
        method: 'POST',cookie: { pacmtoken },headers: {
        "location-data": "30.6698676660,104.1229614820",
        "channel": "0146921",
        "activityId": "MAC_KF_CBH_JBZX",
        "Referer": "https://h5.nf.migu.cn"
    }});
    return {data,newPacmToken: cookies.pacmtoken || ''};
};

/**
 * 获取AI豆数量
 * @param pacmtoken - 用户认证 token
 * @returns AI豆数量
 */
export const getAiBeanCount = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/act-jbzx/ai-bean/query-available',{
        cookie: { pacmtoken },headers: {
        "activityId": "MAC_KF_CBH_JBZX"
    }});
    return { data,newPacmToken: cookies.pacmtoken || ''};
};

/**
 * 获取AI豆签到状态
 * @param pacmtoken - 用户认证 token
 * @returns AI豆签到状态
 */
export const getAiBeanSignStatus = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.migu.cn/act-jbzx/sign/status',{
        cookie: { pacmtoken },headers: {
        "channel": "0146921",
        "activityId": "MAC_KF_CBH_JBZX"
    }});
    return { data,newPacmToken: cookies.pacmtoken || ''};
};

/**
 * AI豆-获取一天的天籁会员
 * @param pacmtoken - 用户认证 token
 * @returns AI豆数量
 */
export const redeemAiBean = async (pacmtoken: string) => {
    const { data, cookies } = await ckfetch('https://app.c.nf.m-jbzx/member-jbzx/member/redeem',{
        method: 'POST',cookie: { pacmtoken }
    });
    return { data,newPacmToken: cookies.pacmtoken || ''};
};
