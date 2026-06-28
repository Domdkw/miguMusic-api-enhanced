# migu-api-enhanced

基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署。受[https://github.com/jsososo/MiguMusicApi](https://github.com/jsososo/MiguMusicApi)项目启发。

## 技术栈

![Hono](https://img.shields.io/badge/Hono-4.x-E36002?logo=hono&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## 一键部署
[![npm version](https://img.shields.io/npm/v/migu-api-enhanced.svg?logo=npm)](https://www.npmjs.com/package/migu-api-enhanced)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Domdkw/migu-api-enhanced)
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Domdkw/migu-api-enhanced)
[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https://github.com/Domdkw/migu-api-enhanced)
[![Deploy on Deno](https://deno.com/button)](https://console.deno.com/new?clone=https://github.com/Domdkw/migu-api-enhanced)

## 特性

- 基于 Hono 框架，轻量高性能
- TypeScript 编写，类型安全
- 多平台支持：Node.js、Cloudflare Workers、Deno、Vercel
- 内置缓存机制
- 完整的音乐 API 接口

## 项目结构

```
migu-api-enhanced/
├── src/
│   ├── adapters/      # 平台适配器
│   ├── modules/       # API 模块（NPM 包导出）
│   ├── routers/       # API 路由
│   ├── types/         # 类型定义
│   ├── utils/         # 工具函数
│   ├── app.ts         # 应用入口
│   └── index.ts       # NPM 包入口
├── functions/         # EdgeOne 边缘函数
├── tsconfig.json      # TypeScript 基础配置
├── tsconfig.sdk.json  # SDK 类型检查配置
├── tsup.config.ts     # tsup 构建配置
└── package.json
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
# Node.js 环境
pnpm run dev

# Cloudflare Workers
pnpm run dev:cf

# Deno 环境
pnpm run dev:deno
```

### 构建与类型检查

```bash
# 构建 NPM 包（使用 tsup）
pnpm run build

# 类型检查（SDK/NPM 包）
pnpm run typecheck

# 构建 EdgeOne 边缘函数
pnpm run build:edgeone
```

### 部署

```bash
# Node.js 生产部署（构建 + 启动）
pnpm install         # 安装依赖（包括 devDependencies）
pnpm run build:node  # 编译
pnpm start           # 启动
# 以后直接运行 pnpm start 即可，无需重新构建

# Cloudflare Workers
pnpm run deploy:cf

# Vercel
pnpm run deploy:vercel

# Deno
pnpm run deploy:deno
```

### 环境变量

服务端部署时可通过环境变量配置：

| 变量名 | 说明 | 示例 |
| ------ | ---- | ---- |
| `ALLOWED_ORIGINS` | CORS 允许的源（逗号分隔） | `https://example.com,https://api.example.com` |

```bash
# Node.js 启动时设置环境变量
ALLOWED_ORIGINS=https://example.com pnpm start
```

## API 接口

### 搜索

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/search` | GET | 搜索歌曲 | `text`(关键词), `page`(页码) |
| `/search/singer` | GET | 搜索歌手 | `text`(关键词) |
| `/search/album` | GET | 搜索专辑 | `text`(关键词), `page`(页码) |
| `/search/all` | GET | 综合搜索 | `text`(关键词), `page`(页码) |
| `/search/hot` | GET | 热门搜索排行 | - |
| `/search/default` | GET | 默认搜索文本 | - |
| `/search/singerTab` | GET | 歌手标签 | - |
| `/search/singerTab/list` | GET | 歌手列表 | `tab`(标签) |

### 专辑

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/album/info` | GET | 专辑详情 | `albumId` |
| `/album/song` | GET | 专辑歌曲列表 | `albumId`, `page`(页码) |

### 歌单

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/playlist/info` | GET | 播放列表信息 | `playlistId` |
| `/playlist/song` | GET | 播放列表歌曲 | `playlistId`, `page`(页码), `size`(数量) |

### 歌手

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/singer/index` | GET | 歌手信息 | `singerId` |
| `/singer/songlist` | GET | 歌手歌曲列表 | `singerId`, `page`(页码) |
| `/singer/album` | GET | 歌手专辑列表 | `singerId` |

### 排行榜

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/rank/index` | GET | 排行榜栏目 | - |
| `/rank/info` | GET | 排行榜内容 | `rankId`, `page`(页码) |

### 推荐

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/recommend/playlist` | GET | 推荐播放列表 | - |
| `/recommend/song` | GET | 推荐歌曲 | `size`(数量), `scene`(场景) |

### 评论

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/comment` | GET | 获取评论 | `resourceId`, `resourceType`(类型), `hotCommentStart`(起始位置), `size`(数量) |

### 资源

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/resourceinfo` | GET | 资源信息 | `resourceId`, `resourceType`(类型) |
| `/can-listen` | POST | 检查歌曲是否可听 | JSON 请求体 |
| `/opNum` | GET | 歌曲播放次数 | `ids`(歌曲ID列表) |

### 播放地址

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/url/v1` | GET | 播放地址 v1 | `contentId`, `copyrightId`, `resourceType` |
| `/url/v2` | GET | 播放地址 v2 | `contentId`, `copyrightId`, `resourceType` |
| `/url/h5v2.4` | GET | 播放地址 h5v2.4 (不稳定，但可以VIP播放)| `contentId`, `copyrightId`, `resourceType` |

### 其他

| 接口路径 | 方法 | 说明 | 参数 |
| -------- | ---- | ---- | ---- |
| `/version` | GET | 安装包信息 | `channel`(渠道), `version`(版本), `ua`(用户代理) |

## TypeScript 配置

本项目使用 TypeScript 5.x，配置分为两部分：

| 配置文件 | 用途 |
| -------- | ---- |
| `tsconfig.json` | 基础配置，定义编译选项 |
| `tsconfig.sdk.json` | SDK/NPM 包类型检查，排除应用层代码 |

### 多平台部署说明

各平台部署使用不同的构建工具：

| 平台 | 部署方式 | 构建工具 |
| ---- | -------- | -------- |
| Node.js | `pnpm run deploy:node` | esbuild |
| Node.js | `tsx` 直接运行 | 无需编译 |
| Cloudflare Workers | `wrangler deploy` | wrangler 内置 |
| Vercel | `vercel --prod` | Vercel 内置 |
| Deno | `deno run` | 无需编译 |
| EdgeOne | `esbuild` | esbuild |
| NPM 包 | `tsup` | tsup |

## 作为 NPM 包使用

本仓库的 `src/modules/` 同时被打包为可独立发布的 NPM 包 `migu-api-enhanced`，
支持 ESM + CJS 双格式，并附带 TypeScript 类型声明。

### 安装

```bash
pnpm add migu-api-enhanced
# 或
npm install migu-api-enhanced
```
>[!NOTE]
> 建议使用最新版本。后续会更新接口。请加上```@latest```获取最新版本。(npm i migu-api-enhanced@latest)

### 方式一：命名导入（推荐，开箱即用，默认 5 秒超时）

```ts
import { getAlbumInfo, getUrlV2 } from 'migu-api-enhanced';

const album = await getAlbumInfo('1123');
const urlInfo = await getUrlV2('contentId', 'copyrightId');
```
### 方式二：`createClient` 工厂函数
```ts
import { createClient } from 'migu-api-enhanced';

const migu = createClient();

// 搜索歌曲
const data = await migu.searchSong('周杰伦', 1);
console.log(data);

// 获取专辑详情
const album = await migu.getAlbumInfo('1123');
console.log(album);
```

### 构建

```bash
pnpm run build
# 产物输出到 dist/：index.js（ESM）+ index.cjs（CJS）+ index.d.ts（类型声明）
```

## 许可证

本项目采用 [Apache License 2.0](LICENSE) 许可证。

## 免责声明

本项目仅供学习和研究使用，不得用于商业用途。

本项目通过非官方接口获取数据，与咪咕音乐官方无任何关联。使用本项目所产生的一切后果由使用者自行承担，项目作者不承担任何责任。

本项目所涉及的音视频资源版权归咪咕音乐所有，请支持正版音乐。

请勿将本项目用于任何违反法律法规的用途，包括但不限于：
- 商业用途
- 大规模爬取数据
- 侵犯他人权益
- 其他违法行为

使用本项目即表示您已阅读并同意以上声明。