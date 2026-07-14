import { h5fetch } from '../utils/h5fetch';

export const checkCanListen = async (body: Record<string, any>) => {
    return await h5fetch(
        `https://app.c.nf.migu.cn/strategy/pc/can-listen/v1.0`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    );
};
