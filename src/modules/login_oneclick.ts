// 登录一键模块
// 通过连接的IP地址获取手机号
// date: 2026年7月11日15点20分
// author: Domdkw
// origin: https://passport.migu.cn/login?sourceid=220029&forceAuthn=true&hideRegister=1&hideForgetPass=1&callbackURL=PostToken


import axios from 'axios';
import { getDeviceId } from '../utils/deviceID';

/**
 * 生成InternetSign签名
 * @returns 包含InternetSign签名的Promise对象
*/
const genInternetSign = async(): Promise<string | undefined>=> {
    const { YDRZ, yTime, md5 } = await import('../utils/YDRZ');
    
    // 生成设备ID，time
    const time = yTime(), e = time, c = "220029", msgId = getDeviceId(), d = msgId;

    // 生成preSign
    const preSign = YDRZ.getSign("300012033963", "1.2"), b = preSign;
 
    // 生成signature (md5)
    let key = "interfacename=genInternetSign&sourceid=" + c + "&systemtime=" + e + "&msgid=" + d + "&preSign=" + b;
    key = encodeURIComponent(key);
    const signature = md5(key)    

    // 发送请求
    const url = `https://passport.migu.cn/api/genInternetSign?preSign=${preSign}&msgid=${msgId}&systemtime=${time}&sourceid=220029&signature=${signature}`;
    //console.log(url)
    const res = await axios.get(url);

    // 解析响应
    const data = res.data;
    if(!data || data.status !== 2000) return undefined;

    // 提取rsaSign
    const rsaSign = data.result?.rsaSign || '';
    //console.log('rsaS:',rsaSign)

    return rsaSign;
}

/**
 * 验证uniToken，获取STtoken、手机号和状态
 * @param uniToken - 从YDRZ获取的uniToken
 * @returns 包含token、手机号和状态的Promise对象，或错误对象
 */
const getSTToken = async(uniToken: string): Promise<{token: string, msisdn: string, status: string} | {error: string}> => {
    const { YDRZ } = await import('../utils/YDRZ');
    
    const $ = {
        'sourceID': '220029',
        'appType': 0,
        'relayState': '',
        'token': uniToken,
        'userInformation': YDRZ.getUserInfo(),
        'isFirst': 1,
    }
    
    const res = await axios.post('https://passport.migu.cn/authn/uniTokenValidate'
        ,{
            params: $,
            headers:{
                'content-type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
        }
    );
    if(!res.data) return {error:'fetch uni e'}
    
    const json = res.data, 
        status:string = json.status?.toString() || '', 
        token:string = json.result?.token || '',
        msisdn:string = json.result?.msisdn || '';
    if(status !== '2000') return {error:'status e'}
    
    //console.log(token, msisdn)
    return {token, msisdn, status};
}

/**
 * 一键登录模块
 * 通过连接的IP地址获取手机号，验证uniToken，获取token、手机号和状态
 * @returns 包含token、手机号和状态的Promise对象，或错误对象
 */
const authn = async(): Promise<{token: string, msisdn: string, status: string} | {error: string}> => {
    const { YDRZ } = await import('../utils/YDRZ');
    
    const rsaSign: string | undefined = await genInternetSign();
    if(!rsaSign) return {error:'genInternetSign failed'}
    
    const uniToken: string | undefined = await YDRZ.getTokenInfo({
        version: '1.2',
        appId: "300012033963",
        sign: rsaSign,
        openType: "1",
        expandParams: "",
        isTest: false,
        getNetworkType: '',
        getMsisdnMask: ''
    })
    if(!uniToken) return {error:'getTokenInfo failed'}
    
    const result = await getSTToken(uniToken);
    if ('error' in result) return result;
    
    const { token, msisdn, status } = result;
    if(!token) return {error:'no token'}
    if(!msisdn) return {error:'no msisdn'}
    
    return {token, msisdn, status};
}

export const loginOneClick = {
    genInternetSign,
    getSTToken,
    authn,
}