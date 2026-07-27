/**
 * Cloudflare Workers 适配器
 * 用于部署到 Cloudflare Workers
 */
import app from '../app';

// Cloudflare Workers 绑定类型声明
type Bindings = {
    URL_KV: KVNamespace;
};

export default app;