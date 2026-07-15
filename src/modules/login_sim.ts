//login_sim
//sim auth
//origin: https://passport.migu.cn
//author: Domdkw 2026.7.9

import axios from 'axios';
import { RSAKey } from '../utils/rsalib'
import { getPublicKey } from '../utils/publicKey'
import { URLParams } from '../utils/URLParams';

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
        $.encMsisdn = encPhone || '';

        //console.log('[$ object]', $);

        const form = URLParams($);
        
        const send = await axios.post(`https://passport.migu.cn/api/simauth/send`
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
        
        const sendbody = send.data;

        if(!sendbody && sendbody.status != '2000'){
            return {error:sendbody};
        }
        const sim_sessionid = sendbody.result.sim_sessionid || '';
        if(!sim_sessionid) return {error:'sim_sessionid e'};
        //console.log('sim_sessionid:',sim_sessionid);

        return {sim_sessionid:sim_sessionid};
    },

    async simQuery(sim_sessionid: string){
        //query start
        const $ = {
            "isAsync":true,
            "sim_sessionid":sim_sessionid,
            "sourceID":"220029"
        }

        const form = URLParams($);

        const query = await axios.post(`https://passport.migu.cn/api/simauth/query`
            ,form
            ,{
                method:'POST',
                headers:{
                    'Host':'passport.migu.cn',
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Referer': 'https://passport.migu.cn/login',
                    'Origin': 'https://passport.migu.cn',
                },
            }
        );

        const querybody = query.data;

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
