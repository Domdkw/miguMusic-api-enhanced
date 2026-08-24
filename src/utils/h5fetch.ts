import axios, { AxiosRequestConfig } from 'axios';
import { getSetCookieValueFromObject } from './setCookie';

type H5FetchInit = RequestInit & {
    maxRedirects?: number;
    cookie?: Record<string, string>;
    params?: Record<string, string | number | boolean | undefined>;
};

// 内部请求函数
export const _fetch = async (url: string, init?: H5FetchInit & AxiosRequestConfig) => {
    const method = (init?.method || 'GET').toUpperCase();
    const headersRaw = init?.headers;
    let headers: Record<string, string> = {};

    if (headersRaw) {
        if (headersRaw instanceof Headers) {
            headersRaw.forEach((value, key) => {
                headers[key] = value;
            });
        } else if (Array.isArray(headersRaw)) {
            headersRaw.forEach(([key, value]) => {
                headers[key] = value;
            });
        } else {
            headers = headersRaw as Record<string, string>;
        }
    }

    const axiosConfig: AxiosRequestConfig = {
        url,
        method,
        headers,
        params: init?.params,
        maxRedirects: init?.maxRedirects,
        data: init?.body,
    };

    if (init?.signal) {
        axiosConfig.signal = init.signal;
    }

    return await axios(axiosConfig);
};

// fetch API 兼容层,只返回 body
export const h5fetch = async (url: string, init?: H5FetchInit & AxiosRequestConfig):  Promise<any> => {
    const response = await _fetch(url, init);
    return response.data;
};

// 带 Cookie 处理的请求函数,自动设置并提取 cookie
export const ckfetch = async (
    url: string,
    init?: RequestInit & AxiosRequestConfig & {
        cookie?: Record<string, string>;
    }
): Promise<{ data: any; cookies: Record<string, string> }> => {
    const cookieKeys = init?.cookie ? Object.keys(init.cookie) : [];

    const cookieHeader = init?.cookie
        ? Object.entries(init.cookie).map(([k, v]) => `${k}=${v}`).join('; ')
        : '';

    const newHeaders: Record<string, string> = {};
    if (init?.headers) {
        if (init.headers instanceof Headers) {
            init.headers.forEach((value, key) => {
                newHeaders[key] = value;
            });
        } else if (Array.isArray(init.headers)) {
            init.headers.forEach(([key, value]) => {
                newHeaders[key] = value;
            });
        } else {
            Object.assign(newHeaders, init.headers);
        }
    }
    if (cookieHeader)  newHeaders['Cookie'] = cookieHeader;

    const response = await _fetch(url, { ...init, headers: newHeaders });

    const cookies: Record<string, string> = {};
    for (const key of cookieKeys) {
        const value = getSetCookieValueFromObject(response.headers, key);
        if (value) {
            cookies[key] = value;
        }
    }

    return {
        data: response.data,
        cookies
    };
};