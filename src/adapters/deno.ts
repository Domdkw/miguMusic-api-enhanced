/**
 * Deno 适配器
 * 用于在 Deno 环境中运行,支持 Deno Deploy 部署
 *
 * 环境变量:
 * - ALLOWED_ORIGINS: CORS 允许的源,多个源用逗号分隔,默认 *
 * - USE_DATABASE: 是否启用数据库,默认 false (Deno Deploy 推荐不使用数据库)
 *
 * 使用方法:
 * - 本地开发: deno task dev 或 deno run --allow-net --allow-read --allow-env src/adapters/deno.ts
 * - Deno Deploy: 直接推送此文件到 Deno Deploy 平台
 */
import app from '../app.js';

/**
 * 获取服务端口
 * 在 Deno Deploy 环境中,端口由平台自动分配
 * 在本地环境中,默认使用 6200 端口
 */
const port = Deno.env.get('PORT') ? parseInt(Deno.env.get('PORT')!) : 6200;

/**
 * 设置默认环境变量
 * 如果环境变量未设置,则使用默认值
 */
if (!Deno.env.get('ALLOWED_ORIGINS')) {
    Deno.env.set('ALLOWED_ORIGINS', '*');
}

/**
 * Deno Deploy 推荐不使用数据库,默认设置为 false
 * 如需使用 Deno KV,请设置环境变量 USE_DATABASE=true
 */
if (!Deno.env.get('USE_DATABASE')) {
    Deno.env.set('USE_DATABASE', 'false');
}

/**
 * 启动 HTTP 服务
 * Deno.serve 会自动处理端口绑定
 * 在 Deno Deploy 中,会自动使用平台的边缘网络
 */
Deno.serve({ port }, app.fetch);