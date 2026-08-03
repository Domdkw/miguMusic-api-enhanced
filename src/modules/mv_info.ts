import { h5fetch } from '../utils/h5fetch';

/**
 * 获取MV视频信息
 * @param mvContentIds MV视频ID (逗号分隔)
 * @example
 * getMvInfo('600906000000476885,600906000000438741')
 * @returns MV视频信息
 */
export const getMvInfo = async (mvContentIds: string) => {
    //域与resourceinfo.ts不同
    mvContentIds = mvContentIds.replace(/,/g, '|');
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${mvContentIds}&resourceType=D&needSimple=01`);
};
