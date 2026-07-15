import axios, { AxiosRequestConfig } from 'axios';

/**
 * fetch API 兼容层
 * @param url 请求的 URL
 * @param init fetch API 的 RequestInit 配置对象
 * @returns Promise<any> JSON 解析后的响应数据
 */
export const h5fetch = async (url: string, init?: RequestInit): Promise<any> => {
    const method = ( init?.method || 'GET' ).toUpperCase();

    // 处理 headers
    const headersRaw = init?.headers;
    let headers: Record<string, string> = {};

    if (headersRaw) {
        if (headersRaw instanceof Headers) {
            // 对象
            headersRaw.forEach((value, key) => {
                headers[key] = value;
            });
        } else if (Array.isArray(headersRaw)) { // 数组
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
        data: init?.body,
    };

    if (init?.signal) {
        axiosConfig.signal = init.signal;
    }

    const response = await axios(axiosConfig);
    return response.data;
};