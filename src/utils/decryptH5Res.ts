const SECURE = "Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"
const aw = 171,iw = 205,ow = 1;

const textEncoder = new TextEncoder()
const textDecoder = new TextDecoder('utf-8')

function textEncode(e: string) {
  return textEncoder.encode(e)
}
function textDecode(e: ArrayBufferView) {
  return textDecoder.decode(e)
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

export function decryptData(buf: ArrayBuffer): { code: number, info: string, data: Record<string, any> } | null {
    const u = decryptBlob(new Uint8Array(buf), SECURE),
    p = u ? textDecode(u) : null;

    try{
        const data = p ? JSON.parse(p) : null;
        return data
    }catch(e) {
        throw new Error('decryptData error')
    };
}
