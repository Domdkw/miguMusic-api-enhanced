// author: Domdkw
// 2026年8月29日
// license: cc-by-nc-sa-4.0

import { h5fetch } from "./h5fetch";
import crypto from "node:crypto";

const E_KEY = "9HkocpYLeG1LNi5m"
function randomMac() {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
}
function randomDeviceId() {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}
function randomIP() {
    return `|192.168.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 256)}`;
}
function md5Hex(data: string) {
    return crypto.createHash('md5').update(data).digest('hex');
}
function desEncrypt(data: string, key: Buffer): Buffer {
    const cipher = crypto.createCipheriv('des-ede3', key, Buffer.alloc(0));
    return Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
}
//DESede/ECB/PKCS5Padding解密（3DES）
function desDecrypt(data: Buffer, key: Buffer): string {
    const decipher = crypto.createDecipheriv('des-ede3', key, Buffer.alloc(0));
    return decipher.update(data) + decipher.final('utf8');
}
function createSalt() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random()*10)).join('');
}
function createKey(data: string): Buffer {
    return Buffer.from(md5Hex(data + E_KEY), 'utf-8').subarray(0, 24);
}
interface TokenForm {
    token?: string;
    service: string;
    time: string;
    data: string;
    salt: string;
    version: string;
}
function createToken(map: TokenForm) {
    return md5Hex(map.service + map.time + map.data + map.salt + map.version + E_KEY);
}
function getAuthParams(data: string, service: string, version?: string) {
    const salt = createSalt()
    ,encryptedBytes = desEncrypt(data, createKey(salt))
    ,encryptData = encryptedBytes.toString('base64')
    ,form: TokenForm = {
        salt,
        "data": encryptData,
        service,
        "time": String(Math.floor(Date.now()/1000)),
        "version": version || "1.0",
    }
    form.token = createToken(form);
    return form;
}
function decryptData(rawData: string, salt: string) {
    return desDecrypt(Buffer.from(rawData, 'base64'), createKey(salt));
}

export async function postTv(data: Object, service: string, version?: string) {
    const rid = randomDeviceId(), Aid = {
        apn: "wifi",
        channel: "014B702",
        imei: rid,
        imsi: rid,
        ip: randomIP(),
        ua: "okhttp/3.12.0", //NX809J
        mac: randomMac(),
        osid: "Android-TV",
        protocolver: "2.0.0",
        stbid: "a0a6cf3c7e2ebc04",
        stbserial: "",
        version: "2.4.001",
        accountid: "",
        hwlevel: "0",
        mobilephone: "",
    };
    const params = getAuthParams(JSON.stringify({...Aid, ...data}), service, version)
    ,form = new FormData();
    for (const [key, value] of Object.entries(params)) {
        form.append(key, value);
    }
    const res = await h5fetch('https://tv.ising.migu.cn/do'
        ,{
            method: 'POST',
            body: form,
        }
    );
    if(res.message !== 'success') {
        return {success: false, error: JSON.stringify(res)};
    }
    return {
        success: true,
        code: '000000',
        data: JSON.parse(decryptData(res.body, res.salt))
    };
}
