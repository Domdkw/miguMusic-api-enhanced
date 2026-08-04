import { ckfetch } from '../utils/h5fetch';

/**
 * 是否关注作者
 * @param pacmtoken 用户token
 * @param authorIds 作者id列表，逗号分隔
 * @param authorType 作者类型 (singer)
 * @returns 是否关注结果和新的pacmtoken
 */
export const isFollowAuthor = async (pacmtoken: string, authorIds: string, authorType:string = 'singer') => {
    const authorList = authorIds.split(',');
    if(authorList.length === 0 || authorType === '' || authorList.length > 100){
        return { success: false, data: {error: '作者id列表不能为空，且最多100个'}, newPacmToken: '' };
    }

    const authors = authorList.map(function(authorId:string){
        return {
            "authorId": authorId,
            "authorType": authorType
        }
    })
    const { data, cookies } = await ckfetch(`https://app.u.nf.migu.cn/user/i/social/is-follow-subscribe/v1.0`
        ,{
            method: 'POST',
            cookie: { pacmtoken },
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "actionType": 2,
                authors
            }),
        }
    );

    return { data, newPacmToken: cookies.pacmtoken || '' };
};