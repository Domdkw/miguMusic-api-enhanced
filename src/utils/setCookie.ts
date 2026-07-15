/**
 * Set-Cookie 解析工具
 * 提供从 HTTP 响应的 Set-Cookie 头中提取指定 cookie 值的通用方法
 */

/** 扩展 Headers 类型以包含 getSetCookie 方法（部分运行时支持） */
interface HeadersWithSetCookie extends Headers {
    getSetCookie(): string[];
}

/**
 * 从响应头中提取所有 Set-Cookie 条目
 * 优先使用 getSetCookie() 方法，降级使用 get('set-cookie')
 * @param headers - HTTP 响应头对象
 * @returns Set-Cookie 字符串数组
 */
export const parseSetCookies = (headers: Headers): string[] => {
    // 优先使用 getSetCookie() 方法（现代浏览器/运行时支持）
    if (typeof (headers as HeadersWithSetCookie).getSetCookie === 'function') {
        return (headers as HeadersWithSetCookie).getSetCookie() || [];
    }

    // 降级方案：使用 get('set-cookie')
    const setCookieHeader = headers.get('set-cookie');
    if (!setCookieHeader) {
        return [];
    }

    // 多个 Set-Cookie 可能用逗号分隔
    return setCookieHeader.split(',').map(c => c.trim());
};

/**
 * 从 Set-Cookie 列表中提取指定 key 的值
 * @param cookies - Set-Cookie 字符串数组
 * @param key - 需要查找的 cookie 键名
 * @returns 对应的 cookie 值，未找到返回空字符串
 */
export const getCookieValue = (cookies: string[], key: string): string => {
    for (const item of cookies) {
        const prefix = `${key}=`;
        if (item.includes(prefix)) {
            const mainPart = item.split(';')[0];
            return mainPart.split('=')[1] || '';
        }
    }
    return '';
};

/**
 * 从 HTTP 响应头中直接提取指定 cookie 的值（便捷方法）
 * @param headers - HTTP 响应头对象
 * @param key - 需要查找的 cookie 键名
 * @returns 对应的 cookie 值，未找到返回空字符串
 */
export const getSetCookieValue = (headers: Headers, key: string): string => {
    const cookies = parseSetCookies(headers);
    return getCookieValue(cookies, key);
};

/**
 * 从 axios 响应头（普通对象）中提取指定 cookie 的值
 * @param headers - axios 响应头对象
 * @param key - 需要查找的 cookie 键名
 * @returns 对应的 cookie 值，未找到返回空字符串
 */
export const getSetCookieValueFromObject = (headers: Record<string, any>, key: string): string => {
    const setCookieHeader: string | string[] | undefined = headers['set-cookie'];
    if (!setCookieHeader) {
        return '';
    }
    const cookies = Array.isArray(setCookieHeader) ? setCookieHeader : setCookieHeader.split(',').map(c => c.trim());
    return getCookieValue(cookies, key);
};
