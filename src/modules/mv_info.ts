import { h5fetch } from '../utils/h5fetch';

export const getMvInfo = async (mvContentId: string) => {
    //域与resourceinfo.ts不同
    return await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${mvContentId}&resourceType=D&needSimple=01`);
};
