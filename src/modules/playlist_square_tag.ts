import { h5fetch } from '../utils/h5fetch';

/**
 * 网页v5 歌单广场所有标签
 * @returns
 */
export const getSquareTag = async (needMoreTag: boolean = true) => {
    const baseTag = await h5fetch(`https://app.c.nf.migu.cn/pc/bmw/playlist-square/tab/v1.0`);
    if (!needMoreTag) {
        return baseTag;
    }
    const moreTag = await h5fetch(`https://app.c.nf.migu.cn/pc/v1.0/template/musiclistplaza-taglist/release`);
    baseTag.data.moreTag = moreTag.data.map((item: Record<string, any>) => {
        const title = item?.header?.title;
        const tagList = item?.content.map((it: Record<string, any>) => ({
            tagName: it.texts[0],
            tagId: it.texts[1],
        }))
        return { title, tagList }
    });
    return baseTag;
};
