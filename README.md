# migu-api-enhanced

基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署。受[https://github.com/jsososo/MiguMusicApi](https://github.com/jsososo/MiguMusicApi)项目启发。

## 技术栈

![Hono](https://img.shields.io/badge/Hono-4.x-E36002?logo=hono&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## API 接口

- **搜索** - 歌曲、歌手、专辑、MV、歌词、短视频、彩铃、演唱会、票务、热门搜索、搜索建议
- **专辑** - 详情、歌曲列表
- **歌单** - 信息、列表歌曲、歌单广场、电台歌曲列表
- **歌手** - 歌手信息、歌手歌曲、歌手专辑、相似歌手
- **播放地址** - 多版本播放地址接口（v1/v2/h5v2.4）
- **推荐** - 歌曲、歌单、相似歌曲、电台
- **MV** - MV 详情、MV 推荐、MV 播放地址(mp4 & m3u8)
- **资源** - 获取歌词、资源信息、播放次数、检查可听性
- **用户** - 用户信息、我喜欢、收藏、自建歌单管理
- **登录认证** - 手机号登录、短信登录、一键登录

更新于 [API 文档](https://domdkw.github.io/miguMusic-api-enhanced/)

## 特性

- 基于 Hono 框架，轻量高性能
- TypeScript 编写，类型安全
- 多平台支持：Node.js、Cloudflare Workers、Deno、Vercel
- 内置缓存机制
- 完整的音乐 API 接口

## 项目结构

```
├── src/
│   ├── adapters/      # 平台适配器
│   ├── modules/       # API 模块（NPM 包导出）
│   ├── routers/       # API 路由
│   ├── types/         # 类型定义
│   ├── utils/         # 工具函数
│   ├── app.ts         # 应用入口
│   └── index.ts       # NPM 包入口
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

# Bun 环境
pnpm run start:bun --watch

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

# Bun 生产环境
pnpm run start:bun
```

### 环境变量

请参考 [deployment.md](/docs/deployment.md) 部署说明。

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

### 方式一：命名导入

```ts
import { getAlbumInfo, getUrlV2 } from 'migu-api-enhanced';
const album = await getAlbumInfo('1123');
// or
import * as migu from 'migu-api-enhanced';
const album = await migu.getAlbumInfo('1123');
```
### 方式二：`createClient` 工厂函数
```ts
import { createClient } from 'migu-api-enhanced';

const migu = createClient();

// 搜索歌曲
const data = await migu.searchSong('周杰伦', 1);
console.log(data);
```

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
