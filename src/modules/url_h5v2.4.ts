export const getUrlH5V24 = async (contentId: string, copyrightId: string, toneFlag: string = 'PQ', resourceType: string = '2') => {
    const headers = {
        "birth": "h5page",
        "channel": "014X031",
        "Referer": "https://y.migu.cn/",
        "location-data": "30.6698676660,104.1229614820",
        "location-info": "",
    }

    const res = await fetch(
        `https://c.musicapp.migu.cn/strategy/listen-url/h5/v2.4?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=${resourceType}&netType=01&toneFlag=${toneFlag}&scene=&lowerQualityContentId=${contentId}`,
        {
            headers: headers
        }
    );
    const blob = await res.blob();

    return await decryptData(blob);
};

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

