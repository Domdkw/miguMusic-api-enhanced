// author: Domdkw
// license: cc-nc-4.0

const e = encodeURI;
export const toneUrl = {
    'LQ': e('全曲试听/Mp3_64_22_16'),
    'PQ': e('标清高清/MP3_128_16_Stero'),
    'HQ': e('标清高清/MP3_320_16_Stero'),
    'SQ': e('歌曲下载/flac'),
    'ZQ24': e('歌曲下载/flac_24bit'),
    'ZQ32': e('歌曲下载/wav_32bit'),
    'Z3D': e('歌曲下载/wav_3d'), //android 3D
    'I3D': e('歌曲下载/alac_3d'), //ios 3D
    '3D60': e('歌曲下载/wav_3d_60s') //3D 60s 试听
}
const toneUrlList = Object.entries(toneUrl)

export const qualityList = Object.keys(toneUrl) as (keyof typeof toneUrl)[];

export type Quality = (typeof qualityList)[number];

export const toneFormat = {
    'LQ':'.mp3', 'PQ': '.mp3', 'HQ': '.mp3',
    'SQ': '.flac', 'ZQ24': '.flac',
    'ZQ32': '.wav', 'Z3D': '.wav', 'I3D': '.m4a', '3D60': '.wav'
}

export function isQuality(quality: string | undefined): quality is Quality {
    return qualityList.includes(quality as any);
}

export function getQuality(url: string): Quality | '' {
    let tone: Quality | '' = '';
    if (!tone) {
        for (let i = 0; i < toneUrlList.length; i++) {
            const [key, value] = toneUrlList[i];
            if (url.includes(value)) {
                tone = key as Quality;
                break
            }
        }
    }
    return tone;
}

export function changeQuality(url: string, quality: string, originalQuality?: string, splitQuery: boolean = true) {
    const originalTone = originalQuality ? ( isQuality(originalQuality)?originalQuality:getQuality(url) ) : getQuality(url);

    if (splitQuery) {
        url = url.split('?')[0];
    }

    if (!isQuality(quality) || !isQuality(originalTone)) {
        return url;
    }else {
        return url
            .replace(toneUrl[originalTone], toneUrl[quality])
            .replace(toneFormat[originalTone], toneFormat[quality]);
    }
}

export const tvQuality = {
    identifyList: ['ringmaker', 'product', 'mv'],
    tonePath: {
        'PQ': '歌曲下载/MP3_128_16_Stero',
        'HQ': '歌曲下载/MP3_320_16_Stero',
        'DB': '杜比/mp4_128',
    },
    toneExt: {
        'PQ': '.mp3', 'HQ': '.mp3',
        'DB': '.mp4',
    },
    changeQuality: (url: string, quality: string, splitQuery: boolean = true) => {
        let songParam = '';
        if (!splitQuery) {
            songParam = "?" + (url.split('?')[1] || '');
        }
        url = url.split('?')[0];
        const folderType = function(url: string): string {
            const publicPos = url.indexOf('/public');
            if (publicPos === -1) {
                return 'unknown';
            }
            const identifier = url.slice(publicPos + 8).split('/')[0];
            for (const identify of tvQuality.identifyList) {
                if (identifier.includes(identify)) {
                    return identify;
                }
            }
            return 'unknown';
        }(url)

        if (folderType === 'product') {
            return decodeURI(changeQuality( e(url), quality, undefined, false)) + songParam;
        }
        if (folderType === 'ringmaker') {
            return tvQuality.changeRingmaker(url, quality) + songParam;
        }
    },
    getRingmakerQuality: (url: string) => {
        const path = url.split('/'),
        l = path.length,
        SQIdentifier = path[l - 3];

        if (['杜比', '歌曲下载'].includes(SQIdentifier)){
            const tone = path[l - 2];
            if (tone === 'MP3_320_16_Stero') return 'HQ';
            if (tone === 'MP3_128_16_Stero') return 'PQ';
            if (tone === 'mp4_128') return 'DB';
            return 'unknown';
        }else{
            const SQformat = path[l - 4];
            if(SQformat !== '无损'){
                return 'unknown';
            }
            return 'SQ';
        }
    },
    changeRingmaker: (url: string, quality: string, originalQuality?: string) => {
        const originalTone = originalQuality || tvQuality.getRingmakerQuality(url);
        if(originalTone === 'unknown' || !(originalTone in tvQuality.tonePath))
            return url;

        const path = url.split('/'), l = path.length;
        let area = '';
        const episode = path.slice(0, l - 4).join('/'),
        fileName = path[l - 1].split('.')[0];

        if (originalTone === 'SQ'){ area = path[l - 3];
        }else{ area = path[l - 4]; }

        if (quality === 'SQ'){
            return `${episode}/无损/${area}/flac/${fileName}.flac`
        }else{
            return `${episode}/${area}/${tvQuality.tonePath[quality as keyof typeof tvQuality.tonePath]}/${fileName}${tvQuality.toneExt[quality as keyof typeof tvQuality.toneExt]}`
        }
    }
}