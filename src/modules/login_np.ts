// login.np.js
// origin: https://passport.migu.cn/
// author: Domdkw

// ====================================


import { RSAKey } from '../utils/rsalib'
import { getPublicKey } from '../utils/publicKey'
import { URLParams } from '../utils/URLParams';


//main

function randomString(): string {
  const random = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return random.toLowerCase();
}

export const loginNP = {
    /**
     * 账号密码登录
     * @param username 用户名
     * @param password 密码
     * @returns 登录成功后的 pacmtoken
     */
    async authn(username: string, password: string): Promise<object | { error: string }> {
        var $ = {
            "isAsync": true,
            "enpassword": "",
            "captcha": "",
            "appType":"0",
            "loginID":"",
            "relayState":"",
            "sourceID": "220029",
            "imgcodeType": "1",
            "fingerPrint": "",
            "fingerPrintDetail": "",
        }

        //get PublicKey
        const p = await getPublicKey();
        //console.log(p)
        const {publicExponent, modulus} = p || {};
        if (!modulus || !publicExponent) {
            return {error:'获取公钥失败'};
        }

        //init rsa
        var rsa = new RSAKey;
        rsa.setPublic(modulus, publicExponent);
        
        //passwd en
        const rsa_pwd = rsa.encrypt(password);
        //username en
        const rsa_username = rsa.encrypt(username);
        
        //w
        const fakeFingerprint = randomString();
        $.fingerPrint = fakeFingerprint;
        $.fingerPrintDetail = fakeFingerprint;
        $.enpassword = rsa_pwd || '';
        $.loginID = rsa_username || '';

        //console.log('[$ object]', $);

        const form = URLParams($);

        const res = await fetch(`https://passport.migu.cn/authn`
            ,{
                method:'POST',
                headers:{
                    'Host':'passport.migu.cn',
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Referer': 'https://passport.migu.cn/login',
                    'Origin': 'https://passport.migu.cn',
                },
                body:form,
            }
        );
        if(!res.ok) return {error:'请求登录失败'};
        const body = await res.json();
        return body;
    }
}
