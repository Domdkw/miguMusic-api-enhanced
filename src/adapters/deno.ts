/**
 * Deno 适配器
 * 用于在 Deno 环境中运行
 */
import app from '../app.js';

const port = 6200;

Deno.serve({ port }, app.fetch);