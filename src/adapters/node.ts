/**
 * Node.js 适配器
 * 用于在 Node.js 环境中运行
 */
import { serve } from '@hono/node-server';
import app from '../app';

const port =  6200;
const hostname = '0.0.0.0';

console.log(`Node.js Server is running on http://${hostname}:${port}`);

serve({
  fetch: app.fetch,
  hostname,
  port
});