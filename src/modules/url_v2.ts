import axios from 'axios';
import { getDeviceId } from '../utils/deviceID'

export const getUrlV2 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', pacmtoken: string = '') => {
    const deviceId = getDeviceId();

    const headers = {
        "channel": "014X031",
        "subchannel": "014X031",
        "pacmtoken": pacmtoken,
        "deviceId": deviceId,
        "referer": "https://music.migu.cn/",
        "location-data": "30.6698676660,104.1229614820",
        "location-info": "",
    };

    const res = await axios.get(
        `https://app.c.nf.migu.cn/strategy/pc/listen/v2.0?contentId=${contentId}&copyrightId=${copyrightId}&scene=&netType=01&resourceType=2&toneFlag=${toneFlag}`,
        {
            headers: headers,
            responseType: 'arraybuffer'
        }
    );

    return await decryptData(res.data);
};

const SECURE = "Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"
const aw = 171,iw = 205,ow = 1;

function textEncode(e: string) {
  return new TextEncoder().encode(e)
}
function textDecode(e: ArrayBufferView) {
  return new TextDecoder('utf-8').decode(e)
}

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

function decryptData(buf: ArrayBuffer) {
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
}
