// 登录一键模块
// 通过连接的IP地址获取手机号
// date: 2026年7月11日15点20分
// author: Domdkw
// origin: https://passport.migu.cn/login?sourceid=220029&forceAuthn=true&hideRegister=1&hideForgetPass=1&callbackURL=PostToken


import crypto from 'crypto'
import { URLParams } from '../utils/URLParams';
import { getDeviceId } from '../utils/deviceID';

export type LoginOneClickData = {
    version: string,
    appId: string,
    openType: string,
    expandParams: string,
    isTest: boolean,
    sign: string,
    getNetworkType: string,
    getMsisdnMask: string,
    traceId: string,
    msgId: string,
    timestamp: string,
    uuid: string,
    businessType: string,
    userInformations: string,
}

/**
 * 调用方实际只需提供这些字段；其余字段由 getTokenInfo 内部补齐。
 */
export type GetTokenInfoInput = Pick<LoginOneClickData, 'version' | 'appId' | 'openType' | 'expandParams' | 'isTest' | 'sign' | 'getNetworkType' | 'getMsisdnMask'>;

const nav = {
    "platform": "iPhone",
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    "appVersion": "5.0 (iPhone; CPU iPhone OS 17_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Mobile/15E148 Safari/604.1",
    "cookieEnabled": true,
    "empty": null,
    "hardwareConcurrency": 6,
    "language": "zh-CN",
    "plugins": "",
    "availWidth": 390,
    "availHeight": 844,
    "colorDepth": 24,
    "timezoneOffset": -480
}

export const YDRZ = {
    "optparams":{
        "uuid": "",
        "msgId": "",
        "traceId": "",
        "businessType": "10",
        "appId": "",
        "timestamp": yTime(),
        "isimge": false,
        "expandParams": "",
        "userInformations": "",
        "CMRequestApi": ""
    },

    randomString(len: number, range: number = 32) {
        var i, 
            bite = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''), 
            list = [];
        for (i = 0x0; i < len; i++)
            list[i] = bite[0 | Math.random() * range];
        return list.join('');
    },

    randomRange(min: number, max: number){
        return Math.floor(Math.random() * (min - max) + max);
    },

    getUA(){
        const ua = nav.userAgent,
        l = [nav.platform,
            ua,
            nav.appVersion,
            nav.cookieEnabled,
            undefined,
            nav.hardwareConcurrency,
            nav.language,
            nav.plugins,
            nav.availWidth,
            nav.availHeight,
            nav.colorDepth,
            nav.timezoneOffset],
        key = l.join('@@'),
        finalUA = ua.length > 100 ? ua.substring(0, 100) : ua;
        return nav.platform + '@@' + finalUA + '@@' + md5(key)
    },

    uaE(str: string) {
        var b, c, d, r4, r1, r2, r3, result = '', bite = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = 0;
        for (; i < str.length; )
            r4 = (b = str.charCodeAt(i++)) >> 0x2,
            r1 = (0x3 & b) << 0x4 | (c = str.charCodeAt(i++)) >> 0x4,
            r2 = (0xf & c) << 0x2 | (d = str.charCodeAt(i++)) >> 0x6,
            r3 = 0x3f & d,
            isNaN(c) ? r2 = r3 = 0x40 : isNaN(d) && (r3 = 0x40),
            result = result + bite.charAt(r4) + bite.charAt(r1) + bite.charAt(r2) + bite.charAt(r3);
        return result;
    },

    getUserInfo(){
        return encodeURIComponent( this.uaE( this.getUA()))
    },

    getSign(appID: string, version: string){
        const optparams = this.optparams;
        optparams.uuid = this.randomString(32, 32);
        optparams.msgId = this.randomString(32, 32);
        this.optparams = optparams;

        return appID + optparams.msgId + optparams.timestamp + optparams.uuid + version;
    },

    async getTokenInfo(data: GetTokenInfoInput): Promise<string | undefined> {
        const optparams = this.optparams;
        const requestData: LoginOneClickData = {
            'version': data.version,
            'appId': data.appId,
            'openType': data.openType,
            'expandParams': data.expandParams,
            'isTest': data.isTest,
            'sign': data.sign,
            'getNetworkType': data.getNetworkType,
            'getMsisdnMask': data.getMsisdnMask,
            'traceId': optparams.uuid,
            'msgId': optparams.msgId,
            'timestamp': optparams.timestamp,
            'uuid': optparams.uuid,
            'businessType': optparams.businessType,
            'userInformations': this.getUserInfo()
        }
        //console.log(requestData);
        
        const res = await fetch("https://verify.cmpassport.com/h5/getPreMobile"
            ,{
                method:'POST',
                headers:{
                    'Referer':'https://passport.migu.cn/',
                    'Origin':'https://passport.migu.cn',
                },
                body:JSON.stringify(requestData),
            }
        );
        
        if(!res.ok) return; //console.error('fetch yd e');
        const json = await res.json(), token = json.body?.token || '';
        if(!token) return; //console.error('no token',json)
        //console.log(token)
        return token;
    }
}

function yTime(){
    const date = new Date(),
    a =[date.getFullYear(),
        date.getMonth()+1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];
    const f = a.map((t)=>{
        return t.toString().padStart(2,'0');
    })
    f[6]=f[6].toString().padStart(3,'0')
    return f.join('');
}
function md5(s: string){
    return  crypto.createHash('md5')
        .update(s, 'utf-8')
        .digest('hex');
}

/**
 * 生成InternetSign签名
 * @returns 包含InternetSign签名的Promise对象
*/
const genInternetSign = async(): Promise<string | undefined>=> {
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
    const res = await fetch(url);

    // 解析响应
    if(!res.ok) return undefined;
    const data = await res.json();
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
    const $ = {
        'sourceID': '220029',
        'appType': 0,
        'relayState': '',
        'token': uniToken,
        'userInformation': YDRZ.getUserInfo(),
        'isFirst': 1,
    }
    const form = URLParams($);
    
    const res = await fetch('https://passport.migu.cn/authn/uniTokenValidate'
        ,{
            method:'POST',
            headers:{
                'content-type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body:form
        }
    );
    if(!res.ok) return {error:'fetch uni e'}
    
    const json = await res.json(), 
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