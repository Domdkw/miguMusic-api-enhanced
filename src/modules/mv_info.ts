import { h5fetch } from '../utils/h5fetch';

export const getMvInfo = async (mvIds: string) => {
    //域与resourceinfo.ts不同
    return h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${mvIds}&resourceType=D&needSimple=01`);
};
