import { h5fetch } from '../utils/h5fetch';

export const getVersion = async () => {
    return await h5fetch(`http://app.c.nf.migu.cn/column/client/version/v1.0`,
        {
            headers: {
                "ua": "Android_migu",
                "version": "0.0.1"
            }
        }
    );
};
