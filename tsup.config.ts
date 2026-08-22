/**
 * tsup 构建配置
 * 多入口打包，每个目录生成独立文件，支持 tree-shaking
 */
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        'index': 'src/exports/index.ts',
        'login/index': 'src/exports/login.ts',
        'utils/index': 'src/exports/utils.ts',
        'activity/index': 'src/exports/activity.ts',

        'mrc/index': 'src/modules/mrc.ts',
    },
    format: ['esm', 'cjs'],
    outExtension({ format }) {
        if (format === 'esm') return { js: '.mjs' };
        return { js: '.cjs' };
    },
    dts: true,
    splitting: true,        // 开启代码分割，生成根级别 chunk 文件
    sourcemap: true,
    clean: true,
    target: 'es2022',
    shims: false,            // Node 18+ 自带 fetch/Blob/TextEncoder，无需 shim
    minify: false,
    skipNodeModulesBundle: false, // 保持 import 路径清晰，不内联 hono 等无关依赖
    bundle: true,
    //esbuildPlugins: [
    //    {
    //        name: 'external-utils',
    //        setup(build) {
    //            // 拦截 modules 中对 utils 的导入，保持为外部引用
    //            build.onResolve({ filter: /^\.\.\/utils\// }, (args) => {
    //                return {
    //                    path: args.path,
    //                    external: true,
    //                };
    //            });
    //        },
    //    },
    //],
});
