export function getDeviceId(a?:number, b?:number): string {
    var c, d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), e = [];
    if (b = b || d.length, a)
        for (c = 0; a > c; c++)
            e[c] = d[0 | Math.random() * b];
    else {
        var f;
        for (e[8] = e[13] = e[18] = e[23] = "-", e[14] = "4", c = 0; 
        36 > c; c++)
            e[c] || (f = 0 | 16 * Math.random(),
            e[c] = d[19 == c ? 3 & f | 8 : f])
    }
    return e.join("")
}
