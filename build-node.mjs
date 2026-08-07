/**
 * Node.js 应用构建脚本
 * 使用 esbuild 将应用编译为单文件
 */
import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/adapters/node.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  outfile: 'dist-server/index.js',
  banner: {
    js: `import { createRequire } from 'module'; const require = createRequire(import.meta.url);`,
  },
  alias: {
    "db0/connectors/bun-sqlite": "./src/stubs/empty.ts"
  },
  external: [
    '@hono/node-server',
    'hono',
    'axios',
    'hono-mem-cache',
  ],
  minify: true,
  sourcemap: true,
});

console.log('✅ Node.js server built to dist-server/index.js');