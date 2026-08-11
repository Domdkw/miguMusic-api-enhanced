export const qualityList = [
    'PQ','HQ','SQ','ZQ24','ZQ32','Z3D'
] as const;

export type Quality = (typeof qualityList)[number];

const e = encodeURI;
export const toneUrl = {
    'PQ': e('标清高清/MP3_128_16_Stero'),
    'HQ': e('标清高清/MP3_320_16_Stero'),
    'SQ': e('歌曲下载/flac'),
    'ZQ24': e('歌曲下载/flac_24bit'),
    'ZQ32': e('歌曲下载/wav_32bit'),
    'Z3D': e('歌曲下载/wav_3d'),
}
const toneUrlList = Object.entries(toneUrl)

export const toneFormat = {
    'PQ': '.mp3', 'HQ': '.mp3',
    'SQ': '.flac', 'ZQ24': '.flac',
    'ZQ32': '.wav', 'Z3D': '.wav',
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
    const originalTone = isQuality(originalQuality) ? originalQuality : getQuality(url);

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
