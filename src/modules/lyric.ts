import axios from 'axios';

/**获取歌词（自建）
 * @param contentId 单个歌曲ID，
 * @returns 歌词文本
 */
export const getLyric = async (contentId: string) => {
    if(contentId === '') return {error:'contentId is empty!', success:false};

    const res = await axios.get(`https://app.c.nf.migu.cn/resource/song/by-contentids/v2.0?contentId=${contentId}`);
    const code = res.data.code.toString() || '';
    const data = res.data.data || [];

    //console.log(data);
    if (code !== '000000') return {
        success: false,
        status: res.status,
        error: res.data.info || res.data,
    };
    if(data.length === 0 ) return {error:'data.length = 0 !', success: false, data};

    const lrcUrl = data[0].lrcUrl || '';
    if(lrcUrl === '') return {error:'lrcUrl is empty!', success:false, data};

    const lrcRes = await axios.get(lrcUrl);
    if(lrcRes.status !== 200) return {
        success: false,
        status: lrcRes.status,
        error: 'lrcRes.status !== 200 !',
        data,
    };

    const lrc = lrcRes.data || '';
    return {
        success: true,
        lrc,
        lrcUrl,
    };
};
