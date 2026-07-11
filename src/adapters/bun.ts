/**
 * Bun 适配器
 * 用于在 Bun 环境中运行生产服务器
 */
import app from '../app';

const port = 6200;
const hostname = '0.0.0.0';

console.log(`Bun Server is running on http://${hostname}:${port}`);

export default {
  hostname,
  port,
  fetch: app.fetch,
} 