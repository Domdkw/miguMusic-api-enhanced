import axios from 'axios';

/** 获取mrc歌词（自建）
 * @note 此方法使用es2020新语法，小心老旧浏览器，如有问题请使用api代理或提issues
 * @param contentId 单个歌曲ID，
 * @param type mrc类型，standard：默认标准lrc，mg：咪咕原版，raw：原始密文
 * @returns mrc歌词文本
 */
export const getMrc = async (contentId: string, type:string = 'standard') => {
    
    const { formatMrc, decryptMrc } = await import('../utils/decryptMrc');
    //import

    if(contentId === '') return {error:'contentId is empty!', success:false};
    if(type === '') return {error:'type is empty!', success:false};

    const res = await axios.get(`https://app.u.nf.migu.cn/MIGUM2.0/v1.0/content/resourceinfo.do?resourceId=${contentId}&resourceType=2`);
    const code = res.data.code.toString() || '';
    const data = res.data.resource[0] || {};

    //console.log(data);
    if (code !== '000000') return {
        success: false,
        status: res.status,
        error: res.data.info || res.data,
    };
    if(data.length === 0 ) return {error:'data.length = 0 !', success: false, data};

    //mrc
    let mrc = '';
    const mrcUrl = data.mrcUrl || '';
    if(mrcUrl !== '') {
        const mrcRes = await axios.get(mrcUrl);
        if(mrcRes.status === 200){
            mrc = mrcRes.data || ''; //raw
            if(type === 'standard' || type === 'mg'){
                mrc = decryptMrc(mrc); //mg
            }
            if(type === 'standard'){
                mrc = formatMrc(mrc); //standard
            }
        }
    }

    return {
        success: true,
        mrc,
        mrcUrl,
    };
};
