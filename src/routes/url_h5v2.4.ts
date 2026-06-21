// Anthor: Domdkw 2026.6.19
// origin: y.migu.cn


import type { Hono } from 'hono';

export default function (app: Hono) {
    /**
     * GET /url/h5v2.4
     * 获取歌曲播放地址
     */
    app.get('/url/h5v2.4', async (c) => {
        const contentId = c.req.query('contentId') || '';
        const copyrightId = c.req.query('copyrightId') || '';
        const resourceType = c.req.query('resourceType') || '2';
        
        const headers = {
			"birth": "h5page",
			"channel": "014X031",
			"Referer": "https://y.migu.cn/",
		}
        
        const res = await fetch(
            `https://c.musicapp.migu.cn/strategy/listen-url/h5/v2.4?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=${resourceType}&netType=01&toneFlag=PQ&scene=&lowerQualityContentId=${contentId}`
            ,{
                headers: headers
            },);
        const blob = await res.blob();

        const encryptedData = await decryptData(blob);

        return c.json({
            success: true,
            data: encryptedData
        });
    });
}


// from https://gist.github.com/Domdkw/deab34c2fc7eff02ceef44b90224de38
// ###########start

const SECURE = ["Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"];

const blobToArrayBuffer = async(blob: Blob) => {
    return await blob.arrayBuffer();
}

function strToUtf8Bytes(e: string) {
    return new TextEncoder().encode(e)
}
function utf8Bytes2str(e: Uint8Array) {
    var t = []
        , n = !0
        , r = !1
        , o = undefined;
    try {
		//@ts-ignore
        for (var a, i = e[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
            var s = a.value;
            s < 16 ? t.push(String.fromCharCode(s)) : (t.push("%"),
            t.push(s.toString(16)))
        }
    } catch (e) {
        r = !0,
        o = e
    } finally {
        try {
			//@ts-ignore
            !n && i.return && i.return()
        } finally {
            if (r)
                throw o
        }
    }
    return decodeURIComponent(t.join(""))
}
function decode(e: Uint8Array, t: string) {
    if (0 == t.length)
        return null;
    var n = e.length;
    if (n < 4)
        return null;
    if (171 != e[0] || 205 != e[1])
        return null;
    if (1 != e[2])
        return null;
    for (var r = e[3], o = strToUtf8Bytes(t), a = o.length, i = new Uint8Array(n - 4), s = 0, c = 4; c < n; c++,
    s++)
        i[s] = e[c] + r - o[s % a];
    return i
}

const decryptData = async (blob: Blob) => {
    const ab = await blobToArrayBuffer(blob);

    const r = decode(new Uint8Array(ab), SECURE[0]);
    
    const d = utf8Bytes2str(r as Uint8Array);

    const data = JSON.parse(d);
    return data;
}

