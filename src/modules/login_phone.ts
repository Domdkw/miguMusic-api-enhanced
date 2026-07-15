import axios from 'axios';
import { RSAKey } from '../utils/rsalib'
import { getPublicKey } from '../utils/publicKey'
import { URLParams } from '../utils/URLParams'


function randomString(){
  const random = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return random.toLowerCase();
}


export const loginPhone = {
    //获取验证码
    async getMsgCode(phone: string){
        var $ = {
            "isAsync": true,
            "msisdn": "",
            "captcha": "",
            "sourceID": "220029",
            "imgcodeType": "2",
            "fingerPrint": "",
            "fingerPrintDetail": "",
            "_":""
        }

        //encrypt phone
        const result = await getPublicKey();
        const {publicExponent = '', modulus = ''} = result as {publicExponent: string, modulus: string};

        var c = new RSAKey;
        c.setPublic(modulus, publicExponent);
        
        $.msisdn = c.encrypt( phone ) || '';
        if(!$.msisdn) return {error:'encrypt error'};

        //write query
        const fakeFingerprint = randomString();
        $.fingerPrint = fakeFingerprint;
        $.fingerPrintDetail = fakeFingerprint;
        $._ = new Date().getTime().toString();

        //console.log('[$ object]', JSON.stringify($));

        const query = URLParams($);

        const res = await axios.get(`https://passport.migu.cn/login/dynamicpassword?${query}`
            ,{
                headers:{
                    'Host':'passport.migu.cn',
                    'Referer': 'https://passport.migu.cn/login',
                    'Origin': 'https://passport.migu.cn',
                }
            }
        );

        const data = res.data;
        return data;
    },

    //登陆
    async authn(phone: string, msgCode: string){
        var $ = {
            "isAsync": true,
            "msisdn": "",
            "dynamicPassword": "",
            "captcha": "",
            "appType":"",
            "securityCode":"7619",
            "sourceID": "220029",
            "imgcodeType": "2",
            "fingerPrint": "",
            "fingerPrintDetail": "",
        }
        
        //get public key
        const result = await getPublicKey();
        const {publicExponent = '', modulus = ''} = result as {publicExponent: string, modulus: string};

        var c = new RSAKey;
        c.setPublic(modulus, publicExponent);
        // encrypt phone, msgCode
        $.msisdn = c.encrypt( phone ) || '';
        $.dynamicPassword = c.encrypt( msgCode ) || '';
        if(!$.msisdn || !$.dynamicPassword) return {error:'encrypt error'};

        //write query
        const fakeFingerprint = randomString();
        $.fingerPrint = fakeFingerprint;
        $.fingerPrintDetail = fakeFingerprint;

        //console.log('[$ object]', JSON.stringify($));

        const form = URLParams($);

        const res = await axios.post(`https://passport.migu.cn/authn/dynamicpassword`
            ,form
            ,{
                headers:{
                    'Host':'passport.migu.cn',
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Referer': 'https://passport.migu.cn/login',
                    'Origin': 'https://passport.migu.cn',
                },
            }
        );
        
        const data = res.data;
        //console.log('data', data);
        return data;
    }
}
