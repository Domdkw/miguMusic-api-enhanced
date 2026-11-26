/** 音频格式 */
export interface AudioFormat {
    resourceType: string;
    formatType: string;
    showTags?: string[];
    showTagsNew?: string[];
    isize: string;
    asize: string;
    iformat: string;
    aformat: string;
}

/** 歌手简要信息 */
export interface SingerBrief {
    id: string;
    name: string;
    img: string;
    nameSpelling: string;
}

/** 图片资源 */
export interface ImgItem {
    imgSizeType: string;
    img: string;
    imgOri?: string;
    webpImg?: string;
    fileId?: string;
    picWidth?: string;
    picHeight?: string;
}

/** 通用歌曲条目（专辑 / 歌单 / 电台等歌曲列表共用） */
export interface SongItem {
    resourceType: string;
    contentId: string;
    songId: string;
    songName: string;
    track?: string;
    mvId?: string;
    mvCopyrightType: number;
    ringToneId: string;
    ringCopyrightId: string;
    haveShockRing: number;
    showTags: string[];
    songPinyin: string;
    audioFormats: AudioFormat[];
    duration: number;
    playNumDesc: string;
    copyrightId: string;
    copyrightType: number;
    restrictType: number;
    albumId: string;
    album: string;
    albumPinyin: string;
    img1: string;
    img2: string;
    img3: string;
    downloadTags?: string[];
    singerList: SingerBrief[];
    ext: {
        disc: string;
    };
    foreverListenFlag: string;
    foreverListen: boolean;
    actionImgUrl?: string;
    shockRingId: string;
    hasAssociatedRing?: boolean;
    chorusStartTime?: string;
    productAuthorizeUsage: string;
    audioBook: string;
    ugcAuthorList: unknown[];
    lrcUrl: string;
    mrcUrl: string;
    /** 子资源类型（歌单 / 电台歌曲） */
    subResourceType?: string;
}
