# migu-api-enhanced

![migu-api-enhanced](https://img.shields.io/npm/v/migu-api-enhanced?style=for-the-badge&logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fmigu-api-enhanced) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Domdkw/miguMusic-api-enhanced/bun-release.yml?style=for-the-badge&logo=github&link=https%3A%2F%2Fgithub.com%2FDomdkw%2FmiguMusic-api-enhanced%2Factions%2Fworkflows%2Fbun-release.yml)
基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署。受[jsososo/MiguMusicApi](https://github.com/jsososo/MiguMusicApi)和[NeteaseCloudMusicApiEnhanced](https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced)项目启发。

## API 接口

- **搜索** - 歌曲、歌单、歌手、专辑、MV、歌词、短视频、彩铃、演唱会、票务、热门搜索、搜索建议
- **专辑** - 详情、歌曲列表、数字专辑（详情、列表、价格信息）
- **歌单** - 信息、列表歌曲、歌单广场（标签，分类）、电台歌曲列表、匹配外部歌单、VIP热歌
- **歌手** - 歌手信息、歌手歌曲、歌手专辑、相似歌手、情书、歌手MV页
- **播放地址** - 多版本播放地址接口（301/m2/v1/v2/v2.4）、数据库URL、咪咕云盘、云盘下载、下载v1
- **推荐** - 歌曲、歌单、相似歌曲、主页电台、所有电台、畅听模式
- **栏目** - 排行榜(Tab/内容)、新歌速递、新碟上架、栏目内容、主页Tab、滚动信息、数据源、info
- **MV** - MV详情、MV推荐、MV播放地址 (mp4 & m3u8)、歌曲MV
- **演唱会** - 简略信息、详情、推荐、播放地址 (m3u8)、评论、推荐MV
- **视频** - 短视频：播放地址、搜索建议、推荐、用户信息、用户作品。 视频彩铃：播放地址、统计信息
- **资源** - 获取歌词、资源信息、播放次数、检查可听性、lrc歌词、翻译trc歌词，解密mrc歌词
- **用户** - 个人信息、手机号信息、我的主页、徽章、我喜欢、收藏、自建歌单管理、今日推荐、关注操作、用户简介、用户主页-歌曲、听歌排行、咪咕云盘、心动模式、表态、消息互动通知、评论（删除）、查询（手机号，已购歌曲）
- **登录认证** - 手机号登录、短信登录、(一键登录，帐密登录)
- **活动** - 官方活动、呢喃（歌曲列表、日期歌曲、签到、签到记录）、AI豆（签到、数量、签到状态、兑换）

更新于 [API 文档](https://domdkw.github.io/miguMusic-api-enhanced/)
测试站点：https://mmae.jsdm.qzz.io/

如果release发布不及时，可以Fork本仓库后去Action手动触发构建，或者自行构建

## 待办清单

- [ ] 实现 ce 请求头
- [ ] js重构的 signVersion:V005 的签名!
- [ ] 咪咕云盘 列表
- [ ] url v2.4 v3.x
- [x] 下载 v2 接口 (已实现v1)
- [ ] 发表评论，删除评论√
- [x] 关注：列表，关注，取消关注，是否关注，关注的视彩号，关注的用户接口
- [x] ai豆：签到，签到记录，使用

欢迎大家提交 Pull Request，或在 GitHub 上打开 Issue。或者适量点点 Star，支持一下！🤗

## 快速开始

### 安装依赖

```bash
pnpm install --registry=https://registry.npmmirror.com
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
```

### 部署

```bash
# Node.js 生产部署（构建 + 启动）记得检查是否>18
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

本仓库的 `src/export/` 同时被打包为可独立发布的 NPM 包 `migu-api-enhanced`，
支持 ESM + CJS 双格式，并附带 TypeScript 类型声明。

示例代码：https://github.com/Domdkw/MusicFree-migu/blob/master/plugins/index.ts >0.2.4

### 安装

```bash
pnpm add migu-api-enhanced
# 或
npm install migu-api-enhanced
```

虽然前端不支持跨域，但是你仍然可以使用此包的工具函数。推荐使用命名导入来减小体积

**@migu-api-enhanced/utils** `getDeviceId`/`getQuality`/`changeQuality`/`getResourceId`/`decryptMrc`

### 方式一：命名导入

```ts
import { getAlbumInfo, getUrlV2 } from 'migu-api-enhanced';
import { changeQuality } from '@migu-api-enhanced/utils';
import { getMrc } from '@migu-api-enhanced/mrc';
import { loginNP } from '@migu-api-enhanced/login';
import { signNinan } from '@migu-api-enhanced/activity';
const album = await getAlbumInfo('1123');
// or
import * as migu from 'migu-api-enhanced';
const album = await migu.getAlbumInfo('1123');
```
### 方式二：`createClient` 工厂函数 <2.27.1
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
