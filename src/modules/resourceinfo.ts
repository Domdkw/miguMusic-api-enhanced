import { h5fetch } from '../utils/h5fetch';

/** 获取资源详情
 * @param resourceIds 资源ID列表，多个ID用|分隔 600919000007791840|600929000001520013
 * @param copyrightIds 版权ID列表，多个ID用|分隔 Copyright ID和resource ID可以二选一
 * @param resourceType 资源类型 2: 歌曲 2002:002: 艺术家
 */
export const getResourceInfo = async (resourceIds: string = '', copyrightIds: string = '', resourceType: number = 2) => {
    resourceIds = resourceIds.replace(/,/g, '|');
    copyrightIds = copyrightIds.replace(/,/g, '|');
    // origin: |
    // replace: ,
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${resourceIds}&copyrightId=${copyrightIds}&resourceType=${resourceType}`);
};
