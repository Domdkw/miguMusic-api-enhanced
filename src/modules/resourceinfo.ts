import { h5fetch } from '../utils/h5fetch';

// 获取资源详情
// 2: 歌曲 2002: 艺术家
export const getResourceInfo = async (resourceId: string = '', copyrightId: string = '', resourceType: number = 2) => {
    return await h5fetch(`https://app.u.nf.migu.cn//MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${resourceId}&copyrightId=${copyrightId}&resourceType=${resourceType}`);
};
