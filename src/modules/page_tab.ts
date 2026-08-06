import { h5fetch } from '../utils/h5fetch';

/**
 * 移动端页面底部tab
 * @returns 主页面 + 子页面
 */
export const getPageTab = async () => {
    return await h5fetch(`https://app.c.nf.migu.cn/bmw/music/nav-bar/v1.0`);
};
