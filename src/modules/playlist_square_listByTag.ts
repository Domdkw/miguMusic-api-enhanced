import { h5fetch } from '../utils/h5fetch';

/**
 * 歌单广场：根据标签获取歌单
 * @returns
 */
export const getSquareListByTag = async (tagId: string, page: number) => {
    const res = await h5fetch(`http://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/musiclistplaza-listbytag?templateVersion=1&tagId=${tagId}&pageNumber=${page}`);
    res.data.contentItemList = res?.data?.contentItemList?.itemList?.reduce((acc: Record<string, any>[], item: Record<string, any>) => {
        if (!item.actionUrl || !item.actionUrl.includes('song-list-info')) {
            return acc;
        }
        item.playlistId = item.actionUrl.split('id=')[1].split('&')[0] || '';
        acc.push(item);
        return acc;
    }, []) as Record<string, any>[] || [];
    res.data.hasNext = res?.data?.nextPageUrl !== undefined && res?.data?.nextPageUrl !== '';
    return res;
};
