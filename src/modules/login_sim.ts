//login_sim
//sim auth
//origin: https://passport.migu.cn
//author: Domdkw 2026.7.9


import rsaModule from '../utils/rsalib.js'
import { getPublicKey } from '../utils/publicKey'

const RSAKey = rsaModule.RSAKey;

//main

function randomString(): string {
  const random = Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  return random.toLowerCase();
}


export const loginSim = {
    async simSend(phone: string){
        var $;

        $ = {
            "isAsync": true,
            "sim":"1",
            "encMsisdn": "",
            "appType":"0",
            "relayState":"",
            "sourceID": "220029",
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
        const rsa = new RSAKey;
        rsa.setPublic(modulus, publicExponent);
        
        //passwd en
        const encPhone = rsa.encrypt(phone);
        
        //w
        const fakeFingerprint = randomString();
        $.fingerPrint = fakeFingerprint;
        $.fingerPrintDetail = fakeFingerprint;
        $.encMsisdn = encPhone;

        //console.log('[$ object]', $);

        const form = new URLSearchParams();
        for (const [key, value] of Object.entries($)) {
            form.append(key, String(value));
        }

        const send = await fetch(`https://passport.migu.cn/api/simauth/send`
            ,{
                method:'POST',
                headers:{
                    //'User-Agent': ua,
                    'Host':'passport.migu.cn'
                },
                body:form,
            }
        );
        if(!send.ok) return {error:'simauth f:net error'};
        const sendbody = await send.json();

        if(!sendbody && sendbody.status != '2000'){
            return {error:sendbody};
        }
        const sim_sessionid = sendbody.result.sim_sessionid || '';
        if(!sim_sessionid) return {error:'sim_sessionid e'};
        //console.log('sim_sessionid:',sim_sessionid);

        return {sim_sessionid:sim_sessionid};
    },

    async simQuery(sim_sessionid: string){
        var $;
        
        //query start
        $ = {
            "isAsync":true,
            "sim_sessionid":sim_sessionid,
            "sourceID":"220029"
        }

        const form = new URLSearchParams();
        for (const [key, value] of Object.entries($)) {
            form.append(key, String(value));
        }

        const query = await fetch(`https://passport.migu.cn/api/simauth/query`
            ,{
                method:'POST',
                headers:{'Host':'passport.migu.cn'},
                body:form,
            }
        );

        if(!query.ok) return {error:'simauth e'};
        const querybody = await query.json();

        if(querybody.status == '4071'){
            //waiting
            return {error:'waiting',body:querybody};
        }else if(querybody.status == '2000'){
            //success
            const token = querybody?.result?.token || '';
            const status = querybody?.status || '';
            //const result = querybody.result;
            return {token,status};

        }else {
            //error
            return {error:querybody.status,body:querybody};
        }
    }
}
