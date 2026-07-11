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

## Bun 本地部署 （推荐）

当然，你也可以使用高性能的 Bun 进行部署。

### 已构建成品

你可以在 [Releases](https://github.com/Domdkw/miguMusic-api-enhanced/releases) 页面下载 Bun 可执行文件。
目前支持 Windows x64 和 Linux x64/arm64 平台。

### 配置环境变量

Windows:

```bash
# 临时设置环境变量
$env:ALLOWED_ORIGINS="http://localhost:3000,http://example.com"
.\dist-bun\migu-api-server.exe
```

Linux:

```bash
# 临时设置环境变量并运行
ALLOWED_ORIGINS="http://localhost:3000,http://example.com" ./dist-bun/migu-api-server-*
```

ALL:

推荐使用 .env 文件：将根目录下的 .env.example 复制到 bun程序所在目录，重命名为 .env 并根据需要修改。

在所有平台上，Bun 会自动读取同目录下的 .env 文件

```
# CORS 允许的源，多个源用逗号分隔
ALLOWED_ORIGINS=http://localhost:6200,http://localhost:3000
```

## 下一步

- [NPM 包使用](npm-package.md) - 在项目中使用
- [API 接口文档](api/search.md) - 查看接口文档
