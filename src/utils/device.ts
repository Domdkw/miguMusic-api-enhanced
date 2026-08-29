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
export function randomMac() {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();
}
export function tvDeviceId() {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
}
export function privateIP() {
    return `192.168.${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 256)}`;
}
export function createSalt() {
    return Array.from({ length: 6 }, () => Math.floor(Math.random()*10)).join('');
}
