// URL database存储
import { env, getRuntimeKey } from 'hono/adapter';
import { createUniversalStorage } from './storage';
import { gzip, ungzip } from 'pako';

let _storage: Awaited<ReturnType<typeof createUniversalStorage>> | null = null;

// 获取存储实例（自动初始化）
async function getStorage() {
    if (!_storage) {
        _storage = await createUniversalStorage(getRuntimeKey(), env);
    }
    return _storage;
}

const zip = {
    '!': 'https://freetyst.nf.migu.cn/public/product9th/product',
    // 下面这个可能用不上
    //'?': 'https://freetyst.nf.migu.cn/public/product8th/product',
}

// 压缩字符串
const compressString = {
    // 压缩字符串
    async zip(value: string) {
        const encoded = new TextEncoder().encode(value);
        return gzip(encoded);
    },
    // 解压字符串
    async unzip(value: Uint8Array) {
        const decoded = ungzip(value);
        return new TextDecoder('utf-8').decode(decoded);
    }
}

export async function saveUrlToDB(contentId: string, url: string) {
    if (!url || !contentId) return;
    url = url.trim();
    // 确保URL使用https协议
    if (url.startsWith('http://')) {
        url = url.replace('http://', 'https://');
    }

    for (const key in zip) {
        const keyAsType = key as keyof typeof zip;
        if (url.includes(zip[keyAsType])) {
            url = url.replace(zip[keyAsType], key.toString());
        }
    }

    url = url.split('?')[0];

    //console.log(url);
    // 压缩URL
    const compressedUrl = await compressString.zip(url);

    const storage = await getStorage();
    const result = await storage.setItemRaw(contentId, compressedUrl);
    return result;
}

export async function getUrlFromDB(contentId: string) {
    const storage = await getStorage();
    const compressedUrl = await storage.getItemRaw(contentId);

    // 检查压缩数据是否存在
    if (!compressedUrl) {
        return { success: false, url: '', error: 'URL不存在' };
    }

    const rawUrl = await compressString.unzip(compressedUrl);

    if (!rawUrl) return { success: false, url: '', error: 'URL解压失败' };

    let url = rawUrl.toString();

    for (const key in zip) {
        const keyAsType = key.toString() as keyof typeof zip;
        if (url.includes(keyAsType)) {
            // 解压缩URL
            url = url.replace(keyAsType, zip[keyAsType]);
        }
    }

    return { success: true, url };
}
