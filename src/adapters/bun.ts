/**
 * Bun 适配器
 * 用于在 Bun 环境中运行生产服务器
 */
import app from '../app';

const port = Number(process.env.PORT) || 6200;
const hostname = process.env.HOST || '0.0.0.0';


console.log(`Bun Server is running on http://${hostname}:${port}`);
console.log(`Allowed CORS origins: ${process.env.ALLOWED_ORIGINS || 'Not configured, allowing all origins'}`);

export default {
  hostname,
  port,
  fetch: app.fetch,
} 