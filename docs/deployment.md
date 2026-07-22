# 部署指南

本项目基于 Hono 框架开发，支持多种平台部署。根据你的需求选择合适的部署方式。

## 环境变量配置

在部署前，需要配置环境变量。复制 `.env.example` 为 `.env` 并根据实际情况修改：

```bash
# CORS 允许的源，多个源用逗号分隔
# 示例: ALLOWED_ORIGINS=http://localhost:3000,http://localhost:6200
# 设置为 * 时允许所有源，留空时拒绝所有跨域请求
ALLOWED_ORIGINS=*

# 是否使用数据库存储 URL
# 启用后，/url/h5v2.4 接口会自动保存音乐链接到数据库
# 通过 /url/db 接口可以查询已保存的链接
USE_DATABASE=true
```

### 环境变量说明

| 变量名               | 说明                            | 默认值       | 示例                                          |
| ----------------- | ----------------------------- | --------- | ------------------------------------------- |
| `ALLOWED_ORIGINS` | CORS 允许的源，多个源用逗号分隔。支持 `*` 通配符 | `*`（允许所有） | `http://localhost:3000,https://example.com` |
| `USE_DATABASE`    | 是否启用数据库存储 URL 功能              | `true`    | `true` 或 `false`                            |

### CORS 配置规则

- 有 `.env` 文件，并且设置 `ALLOWED_ORIGINS`为空：拒绝所有跨域请求
- 无 `.env` 文件，允许所有（开发环境推荐）
- 设置为 `*`：允许所有跨域请求
- 设置为具体的域名列表：仅允许列表中的源访问
- 多个源用逗号分隔，不支持空格

## Node.js 部署

适合传统服务器部署，稳定可靠。

### 部署步骤

1. **克隆项目**

```bash
git clone https://github.com/Domdkw/miguMusic-api-enhanced.git
cd miguMusic-api-enhanced
```

1. **安装依赖**

```bash
pnpm install
```

1. **配置环境变量**

创建 `.env` 文件并配置环境变量：

```bash
cp .env.example .env
# 编辑 .env 文件，根据实际情况修改配置
```

或在启动时直接设置环境变量：

```bash
# Windows PowerShell
$env:ALLOWED_ORIGINS="https://example.com"
$env:USE_DATABASE="true"
pnpm start

# Linux/macOS
ALLOWED_ORIGINS=https://example.com USE_DATABASE=true pnpm start
```

1. **构建项目**

```bash
pnpm run build:node
```

1. **启动服务**

```bash
pnpm start
```

服务默认在 `http://localhost:6200` 启动。

## Bun 部署（推荐）

Bun 是高性能的 JavaScript 运行时，启动速度更快，资源占用更低。

### 使用已构建的可执行文件

在 [Releases](https://github.com/Domdkw/miguMusic-api-enhanced/releases) 页面下载对应平台的可执行文件：

- Windows x64: `migu-api-server.exe`
- Linux : `migu-api-server-linux` 自行选择架构

**配置环境变量**

Windows PowerShell:

```powershell
# 临时设置环境变量并运行
$env:ALLOWED_ORIGINS="http://localhost:3000,https://example.com"
$env:USE_DATABASE="true"
.\migu-api-server.exe
```

Linux:

```bash
# 临时设置环境变量并运行
ALLOWED_ORIGINS="http://localhost:3000,https://example.com" USE_DATABASE=true ./migu-api-server-linux
```

**使用 .env 文件（推荐）**

将 `.env.example` 复制到可执行文件所在目录，重命名为 `.env`：

```bash
# 重命名
cp .env.example /path/to/executable/dir/.env
# 编辑 .env 文件配置环境变量
./migu-api-server.exe  # Windows
# 或
./migu-api-server-linux  # Linux
```

Bun 会自动读取同目录下的 `.env` 文件。

### 本地开发

```bash
pnpm run dev
```

## 数据库配置

当 `USE_DATABASE=true` 时，系统会自动初始化数据库连接。

`bun`、`node.js ` 和其他运行时的数据库，存储在 `/sql/` 目录下。共用一个数据库文件。

- 使用 `@libsql/client` 作为数据库客户端，基于SQLite数据库

数据库功能主要用于：

- 缓存音乐链接，减少重复请求
- 通过 [/url/db](api/url.md#数据库url接口) 接口查询历史记录

## 下一步

- [NPM 包使用](npm-package.md) - 在项目中集成
- [API 接口文档](api/search.md) - 查看接口详细说明

