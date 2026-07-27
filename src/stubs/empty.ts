/**
 * 空模块 stub - 用于在 Cloudflare Workers 打包时替换 Bun 专用模块
 * 当 wrangler alias 将 db0/connectors/bun-sqlite 映射到此文件时，
 * 打包器不会尝试解析 bun:sqlite
 */

export default function() {
    throw new Error('bun-sqlite connector is not available in Cloudflare Workers environment');
}