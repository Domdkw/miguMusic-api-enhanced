import { randomUA } from "./ua";
import crypto from 'node:crypto'
import axios from 'axios';

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

export function md5(s: string){
    return  crypto.createHash('md5')
        .update(s, 'utf-8')
        .digest('hex');
}

const nav = {
    "platform": "iPhone",
    "userAgent": randomUA(),
    "appVersion": randomUA(),
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
export function yTime(){
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
        
        const res = await axios.post("https://verify.cmpassport.com/h5/getPreMobile"
            ,requestData
            ,{
                headers:{
                    'Referer':'https://passport.migu.cn/',
                    'Origin':'https://passport.migu.cn',
                },
            }
        );
        
        if(!res.data) return; //console.error('fetch yd e');
        const json = res.data, token = json?.token || '';
        if(!token) return; //console.error('no token',json)
        //console.log(token)
        return token;
    }
}
