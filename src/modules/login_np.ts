// login.np.js
// origin: https://passport.migu.cn/
// https://gist.github.com/Domdkw/041f098949981e0798b03af114427e8e

// ====================================


import rsaModule from '../utils/rsalib.js'
import { getPublicKey } from '../utils/publicKey'

const RSAKey = rsaModule.RSAKey;

//main

function randomString(): string {
  const random = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return random.toLowerCase();
}

export const loginNP = {
    async authn(username: string, password: string){
        var error = '';
        
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
            error = '获取公钥失败';
            return {error};
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
        $.enpassword = rsa_pwd;
        $.loginID = rsa_username;

        //console.log('[$ object]', $);

        const form = new URLSearchParams();
        for (const [key, value] of Object.entries($)) {
            form.append(key, String(value));
        }

        const res = await fetch(`https://passport.migu.cn/authn`
            ,{
                method:'POST',
                headers:{
                    'Host':'passport.migu.cn'
                },
                body:form,
            }
        );
        if(!res.ok) return {error:['请求登录失败']};
        const body = await res.json();
        return body;
    }
}
