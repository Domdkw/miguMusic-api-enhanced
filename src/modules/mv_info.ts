import { h5fetch } from '../utils/h5fetch';

export const getMvInfo = async (mvIds: string, {
    needAbsoluteUrl = false,
}) => {
    const res = await h5fetch(`https://c.musicapp.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${mvIds}&resourceType=D&needSimple=01`);
    
    //处理响应数据
    if (!res) return {error: '请求失败'};
    if (res.error) return {error: res.error};
    const resource = res.resource || [];
    if (resource.length === 0) return {error: 'resource不存在'};

    //启用url处理时，处理url字段
    if (needAbsoluteUrl) {
        resource.forEach((item: any) => {
            if(!item.rateFormats) return;
            
            item.rateFormats.forEach((rateFormat: any) => {
                if(!rateFormat.url) return;

                //处理相对路径: /xxx
                if(!rateFormat.url.startsWith('http') && !rateFormat.url.startsWith('https')) {
                    if(rateFormat.url[0] === '/' && rateFormat.url[1] !== '/') {
                        //只追加，不替换
                        rateFormat.absoluteUrl = `https://freevod.nf.migu.cn${rateFormat.url}`;
                    }
                }
            });
        });
        //重新赋值
        res.resource = resource;
        return res;
    }
    
    return res;
};
