# 部署指南

本项目支持多种平台部署，根据你的需求选择合适的部署方式。

## Node.js 部署

### 生产环境部署

1. 克隆项目：

```bash
git clone https://github.com/Domdkw/miguMusic-api-enhanced.git
```

2. 配置环境变量

复制 `.env.example` 到 `.env` 并根据需要修改。

| 变量名 | 说明 | 示例 |
| ------ | ---- | ---- |
| `ALLOWED_ORIGINS` | CORS 允许的源（逗号分隔） | `https://example.com,https://api.example.com` |

或者

```bash
# Node.js 启动时设置环境变量
ALLOWED_ORIGINS=https://example.com pnpm start
```

3. 安装依赖：

```bash
pnpm install
```

4. 构建项目：

```bash
pnpm run build:node
```

5. 启动服务：

```bash
pnpm start
```
以后直接启动服务即可，无需指定端口，默认端口为 6200。
npm start

## 下一步

- [NPM 包使用](npm-package.md) - 在项目中使用
- [API 接口文档](api/search.md) - 查看接口文档
