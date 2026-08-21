/**
 * tsup 构建配置
 * 多入口打包，每个目录生成独立文件，支持 tree-shaking
 */
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        'index': 'src/index.ts',
        'modules/index': 'src/modules/index.ts',
        'utils/index': 'src/utils/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: false,        // 关闭代码分割，避免生成根级别 chunk 文件
    sourcemap: true,
    clean: true,
    target: 'es2022',
    shims: false,            // Node 18+ 自带 fetch/Blob/TextEncoder，无需 shim
    minify: false,
    skipNodeModulesBundle: true, // 保持 import 路径清晰，不内联 hono 等无关依赖
    bundle: true,
    external: [
        './modules/index',   // 让根入口引用子目录的 modules
        './utils/index',     // 让根入口引用子目录的 utils
    ],
});
