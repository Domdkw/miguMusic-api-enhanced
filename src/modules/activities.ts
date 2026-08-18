import { h5fetch } from '../utils/h5fetch';

export const getActivities = async () => {
    return await h5fetch(`https://app.u.nf.migu.cn/MIGUM3.0/v1.0/template/index-activity/release`);
};
