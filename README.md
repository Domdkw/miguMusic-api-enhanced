# migu-api-enhanced

基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署。

## 技术栈

![Hono](https://img.shields.io/badge/Hono-4.x-E36002?logo=hono&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?logo=cloudflare&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

## 一键部署

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
│   ├── routes/        # API 路由
│   ├── types/         # 类型定义
│   └── utils/         # 工具函数
├── postman/           # Postman 集合
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

### 部署

```bash
# Cloudflare Workers
pnpm run deploy:cf

# Vercel
pnpm run deploy:vercel

# Deno
pnpm run deploy:deno
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