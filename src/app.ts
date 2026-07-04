import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { memCache } from 'hono-mem-cache';
import apiRoutes from './routers';
// 通过 import 引入 package.json，esbuild / tsup 在构建时会将 JSON 内联到产物中
// 这样在 Node、Cloudflare Workers、Vercel Edge、Deno、EdgeOne 等所有 bundler 平台都能直接读取版本号
// 需要 tsconfig 启用 "resolveJsonModule": true
import pkg from '../package.json';

/**
 * 环境变量类型定义
 */
type EnvBindings = {
    ALLOWED_ORIGINS?: string;
};

const app = new Hono<{ Bindings: EnvBindings }>();

/**
 * 从环境变量获取允许的源列表
 * 兼容 Cloudflare Workers、Vercel Edge、Node.js 等多平台
 */
const getAllowedOrigins = (env: EnvBindings): string[] => {
    const origins = env.ALLOWED_ORIGINS || '';
    return origins.split(',').map(origin => origin.trim()).filter(Boolean);
};

// 全局中间件
app.use('*', logger());

app.use('*', cors({
    origin: (origin: string, c) => {
        const allowedOrigins = getAllowedOrigins(c.env);
        if (allowedOrigins.includes(origin)) {
            return origin;
        }
        return allowedOrigins[0] || 'localhost';
    },
    allowMethods: ['GET', 'OPTIONS'],
}));

/**
 * 配置内存缓存中间件
 * max: 最大缓存项数
 * ttl: 缓存过期时间（毫秒）
 */
app.use('/api/*', memCache({
  max: 100,
  ttl: 300000, // 5分钟缓存
}));

// 健康检查
app.get('/', (c) => {
  return c.json({
    message: 'Migu API Enhanced',
    version: pkg.version,
    status: 'running'
  });
});

// API 路由
app.route('/api', apiRoutes);

// 404 处理
app.notFound((c) => {
  return c.json({
    success: false,
    error: 'Not Found',
    message: '请求的资源不存在'
  }, 404);
});

// 全局错误处理
app.onError((err, c) => {
  return c.json({
    success: false,
    error: 'Internal Server Error',
    message: err.message
  }, 500);
});

export default app;