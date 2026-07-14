import { getDeviceId } from '../utils/deviceID'

export const getUrlV2 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', resourceType: string = '2', pacmtoken: string = '') => {
    const deviceId = getDeviceId();
    const timestamp = Date.now();

    const headers = {
        "Accept": "application/json, text/plain, */*",
        "test": "00",
        "channel": "014X031",
        "subchannel": "014X031",
        "logId": "cfrom=&appId=h5",
        "uid": "",
        "pacmtoken": pacmtoken,
        "appId": "h5",
        "platform": "H5",
        "deviceId": deviceId,
        "ua": "Android_migu",
        "version": "6.8.8",
        "activityId": "MUSIC-WWW",
        "birth": "h5page",
        "signature": "1",
        "timestamp": timestamp.toString(),
        "Content-Type": "application/json;charset=UTF-8",
        "referer": "https://music.migu.cn/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.0.0 Safari/537.36 Edg/148.0.0.0",
        "location-data": "30.6698676660,104.1229614820",
        "location-info": "",
    };

    const res = await fetch(
        `https://app.c.nf.migu.cn/strategy/pc/listen/v2.0?contentId=${contentId}&copyrightId=${copyrightId}&scene=&netType=01&resourceType=${resourceType}&toneFlag=${toneFlag}`,
        {
            headers: headers
        }
    );
    const blob = await res.blob();

    return await decryptData(blob);
};

const SECURE = "Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"
const aw = 171,iw = 205,ow = 1;

function textEncode(e: string) {
  return new TextEncoder().encode(e)
}
function textDecode(e: ArrayBufferView) {
  return new TextDecoder('utf-8').decode(e)
}

const blobToArrayBuffer = async(blob: Blob) => { return blob.arrayBuffer(); }
function decryptBlob(e: Uint8Array, r: string) {
    if (r.length == 0)
        return null;
    var n = e.length;
    if (n < 4 || !(e[0] == aw && e[1] == iw) || e[2] != ow)
        return null;
    for (var t = e[3], a = textEncode(r), i = a.length, o = new Uint8Array(n - 4), s = 0, c = 4; c < n; c++,
    s++)
        o[s] = e[c] + t - a[s % i];
    return o
}

async function decryptData(blob: Blob) {
  return await blobToArrayBuffer(blob).then(buf => {
    let l = buf,
    a = SECURE,
    u = decryptBlob(new Uint8Array(l), a),
    p = u ? textDecode(u) : null;

    try{
      const data = p ? JSON.parse(p) : null;
      return data
    }catch(e) {
        return null;
    };
  })
}
