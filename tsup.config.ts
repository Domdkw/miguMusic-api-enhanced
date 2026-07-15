/**
 * tsup 构建配置
 * 负责将 src/index.ts 打包为 ESM + CJS 双格式，并生成 TypeScript 类型声明
 */
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,        // 单入口不分包，避免 CJS 兼容性问题
    sourcemap: true,
    clean: true,
    target: 'es2022',
    shims: false,            // Node 18+ 自带 fetch/Blob/TextEncoder，无需 shim
    minify: false,
    skipNodeModulesBundle: true, // 保持 import 路径清晰，不内联 hono 等无关依赖
    bundle: true,            // 将所有模块打包到一个文件中，解决 ESM 导入路径问题
});
