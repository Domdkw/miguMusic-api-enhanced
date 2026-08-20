import axios from 'axios';
import { formatMrc, decryptMrc } from '../utils/decryptMrc';

/**获取歌词（自建）
 * @param contentId 单个歌曲ID，
 * @param type 歌词类型，逗号分隔，默认lrc
 * @returns 歌词文本
 */
export const getLyric = async (contentId: string, type:string = 'lrc') => {
    if(contentId === '') return {error:'contentId is empty!', success:false};
    const types = type.split(',');
    if(types.length === 0) return {error:'types is empty!', success:false};

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

    let lrc, lrcUrl, mrc, mrcUrl, trc, trcUrl;

    //lrc
    if(types.includes('lrc')){
        lrcUrl = data.lrcUrl || '';
        if(lrcUrl !== '') {
            const lrcRes = await axios.get(lrcUrl);
            if(lrcRes.status === 200){
                lrc = lrcRes.data || '';
            }
        }
    }
    //trc
    if(types.includes('trc')){
        trcUrl = data.trcUrl || '';
        if(trcUrl !== '') {
            const trcRes = await axios.get(trcUrl);
            if(trcRes.status === 200){
                trc = trcRes.data || '';
            }
        }
    }
    //mrc
    if(types.includes('mrc')){
        mrcUrl = data.mrcUrl || '';
        if(mrcUrl !== '') {
            const mrcRes = await axios.get(mrcUrl);
            if(mrcRes.status === 200){
                mrc = formatMrc(decryptMrc(mrcRes.data || ''));
            }
        }
    }

    return {
        success: true,
        lrc,
        lrcUrl,
        mrc,
        mrcUrl,
        trc,
        trcUrl,
    };
};
