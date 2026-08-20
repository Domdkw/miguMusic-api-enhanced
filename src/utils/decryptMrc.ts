// author: Domdkw
// date: 2026年8月20日
// origin: MrcEnDeUtil

const DELTA = 2654435769n
const MIN_LENGTH = 32
const SPECIAL_CHAR = 0x30 // '0' 的字节值

/**
 * 将 bigint 规范化为 64 位有符号整数范围，模拟 Java long 溢出
 */
function toLong(num: bigint): bigint {
    const MAX = 9223372036854775807n
    const MIN = -9223372036854775808n
    if (num > MAX) return toLong(num - (1n << 64n))
    if (num < MIN) return toLong(num + (1n << 64n))
    return num
}

function ToByteArray(data: bigint[]): Buffer {
    const arrayList: number[] = []
    for (const j2 of data) {
        const bArrLong2bytes = long2bytes(j2)
        for (let i = 0; i < 8; i++) {
            arrayList.push(bArrLong2bytes[i])
        }
    }
    while (arrayList[arrayList.length - 1] === SPECIAL_CHAR) {
        arrayList.pop()
    }
    return Buffer.from(arrayList)
}

function long2bytes(num: bigint): Buffer {
    const byteBufferOrder = Buffer.alloc(8)
    byteBufferOrder.writeBigInt64LE(num, 0)
    return byteBufferOrder
}

/**
 * 将字符串右侧填充到指定长度
 */
function PadRight(source: string, length: number): string {
    let result = source
    while (result.length < length) {
        result += '0'
    }
    return result
}

/**
 * 将十六进制字符串每 16 字符一组转换为 bigint 数组
 */
function ToLongArray(data: string): bigint[] {
    const length = Math.floor(data.length / 16)
    const jArr: bigint[] = new Array(length)
    for (let i = 0; i < length; i++) {
        jArr[i] = toLong(BigInt('0x' + data.substring(i * 16, (i * 16) + 16)))
    }
    return jArr
}

function bytes2long(buf: Buffer, index: number): bigint {
    return buf.readBigInt64LE(index)
}

/**
 * 将 UTF-8 字节数组扩展为 UTF-16LE 格式，再按 8 字节一组转为 bigint 数组
 */
function ToLongArray2(data_: Buffer): bigint[] {
    const bArr = Buffer.alloc(data_.length * 2)
    for (let i = 0; i < data_.length; i++) {
        bArr[i * 2] = data_[i]
        bArr[(i * 2) + 1] = 0
    }
    const length = (bArr.length % 8 === 0 ? 0 : 1) + Math.floor(bArr.length / 8)
    const jArr: bigint[] = new Array(length)
    for (let i2 = 0; i2 < length - 1; i2++) {
        jArr[i2] = bytes2long(bArr, i2 * 8)
    }
    const bArr2 = Buffer.alloc(8)
    let i3 = 0
    for (let i4 = (length - 1) * 8; i4 < bArr.length; i4++) {
        bArr2[i3] = bArr[i4]
        i3++
    }
    jArr[length - 1] = bytes2long(bArr2, 0)
    return jArr
}

/**
 * TEA 解密算法
 */
function TEADecrypt(data: bigint[], key: bigint[]): bigint[] {
    const length = data.length
    if (length >= 1) {
        let j3 = data[0]
        let j4 = toLong(
            ( 6n + BigInt(Math.floor(52 / length)) )
            * DELTA
        )
        while (true) {
            const j5 = j4
            if (j5 === 0n) {
                break
            }
            const j6 = toLong(3n & (j5 >> 2n))
            let j7 = length
            while (true) {
                j7--;
                if (j7 > 0) {
                    const j8 = data[(j7 - 1)]
                    const i = j7
                    j3 = toLong(
                        data[i] -
                        toLong(
                            toLong(
                                toLong(j3 ^ j5)
                                +toLong(j8 ^ key[Number(toLong((3n & BigInt(j7)) ^ j6))])
                            )
                            ^toLong(
                                toLong(
                                    toLong(j8 >> 5n)
                                    ^toLong(j3 << 2n)
                                )
                                +toLong(
                                    toLong(j3 >> 3n)
                                    ^toLong(j8 << 4n)
                                )
                            )
                        )
                    )
                    data[i] = j3
                } else {
                    break
                }
            }
            const j9 = data[length - 1]
            j3 = toLong(
                data[0] -
                toLong(
                    toLong(
                        toLong(key[
                            Number(toLong((BigInt(j7) & 3n) ^ j6))
                        ] ^ j9)
                        +toLong(j3 ^ j5)
                    )
                    ^toLong(
                        toLong(
                            toLong(j9 >> 5n)
                            ^toLong(j3 << 2n)
                        )
                        +toLong(
                            toLong(j3 >> 3n)
                            ^toLong(j9 << 4n)
                        )
                    )
                )
            )
            data[0] = j3
            j4 = toLong(j5 - DELTA)
        }
    }
    return data
}

/**
 * MRC 解密入口：将十六进制密文解密为明文字符串
 */
export function decryptMrc(data: string): string {
    if (data == null || data.length < MIN_LENGTH) return data;
    const decrypted = TEADecrypt(
        ToLongArray(data),
        ToLongArray2(Buffer.from(PadRight('karakal@123Qcomyidongtiantianhaoting', MIN_LENGTH), 'utf8'))
    )
    return ToByteArray(decrypted).toString('utf16le')
}

export function toWordTime(times: string) {
    const type = times.startsWith('(') ? 1 : times.startsWith('[') ? 2 : 0;
    times = times.replace(/[()\[\]]/g, '').trim(); // 移除()[]
    const time = Number(times.split(',')[0]);
    const mm = Math.floor(time / 60000 ).toString().padStart(2, '0');
    const ss = Math.floor(time / 1000 % 60).toString().padStart(2, '0');
    const ms = Math.floor(time % 1000).toString().padStart(3, '0');
    if(type === 1){
        return `[${mm}:${ss}.${ms}]`;
    }else{
        return times;
    }
}
/**
 * 格式化 MRC 歌词为标准 LRC 格式
 * @param data MRC 歌词字符串
 * @returns 标准LRC
 */
export function formatMrc(data: string) {
    const line = data.split('\n')
    //console.log(line)
    const formattedData = line.reduce(( prev: string[], cur: string, index) => {
        cur = cur.trim();
        if(cur === '') return prev;
        if(! '1234567890'.split('').includes(String(cur[1]))){
            prev.push(cur);
            return prev;
        }
        //word
        cur = cur.replace(/\[[^\]]*\]/g, ''); /// 移除[*]
        let nextIndex = 0, partStart = 0;
        let lineStr = '';
        while(true){
            if(nextIndex === -1) break;
            const leftPos = cur.indexOf('(', nextIndex);
            if(leftPos === -1) break; // 下一个没有(
            const rightPos = cur.indexOf(')', leftPos);
            if(rightPos === -1) break;
            const time = cur.substring(leftPos, rightPos + 1);
            const word = cur.substring(partStart, leftPos);
            if(!!word && !!time){
                partStart = rightPos + 1;
                nextIndex = rightPos + 1;
            }else{ break }
            lineStr += `${toWordTime(time)}${word}`;
        }
        prev.push(lineStr + '\n');
        return prev;
    },[])
    return formattedData.join('');
}
