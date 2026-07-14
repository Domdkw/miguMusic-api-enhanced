import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    // 忽略的文件和目录
    {
        ignores: [
            'dist/**',
            'dist-server/**',
            'dist-bun/**',
            'node_modules/**',
            'coverage/**',
            '*.js',
            '*.mjs',
            '*.cjs',
            '!eslint.config.js',
        ],
    },

    // JavaScript 推荐配置
    js.configs.recommended,

    // TypeScript 推荐配置
    ...tseslint.configs.recommended,

    // 自定义规则
    {
        rules: {
            //var 关键字启用
            'no-var': 'off',
            // 禁用 console.log
            'no-console': 'warn',
            // 未使用的变量设为警告
            '@typescript-eslint/no-unused-vars': 'warn',
            // 允许 any 类型（根据项目需求调整）
            '@typescript-eslint/no-explicit-any': 'warn',
            // 允许未使用的表达式
            '@typescript-eslint/no-unused-expressions': 'off',
        },
    },

    // Prettier 配置（必须放在最后）
    prettierConfig
);
