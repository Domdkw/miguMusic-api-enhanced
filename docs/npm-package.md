# NPM 包使用指南

本项目可作为 NPM 包在 Node.js 项目中直接使用，无需部署服务。

## 安装

```bash
pnpm add migu-api-enhanced
# 或
npm install migu-api-enhanced
# 或
yarn add migu-api-enhanced
```

> **注意**: 建议使用最新版本。安装时请加上 `@latest` 标签：
> ```bash
> npm install migu-api-enhanced@latest
> ```

## 使用方式

### 方式一：命名导入（推荐）

直接导入所需的 API 函数，开箱即用：

```typescript
import { getAlbumInfo, getUrlV2, searchSong } from 'migu-api-enhanced';

// 搜索歌曲
const searchResult = await searchSong('周杰伦', 1);
console.log(searchResult);

// 获取专辑详情
const album = await getAlbumInfo('1123');
console.log(album);

// 获取播放地址
const urlInfo = await getUrlV2('contentId', 'copyrightId', 2);
console.log(urlInfo);
```

### 方式二：createClient 工厂函数

使用工厂函数创建客户端实例：

```typescript
import { createClient } from 'migu-api-enhanced';

const migu = createClient();

// 搜索歌曲
const data = await migu.searchSong('周杰伦', 1);
console.log(data);

// 获取专辑详情
const album = await migu.getAlbumInfo('1123');
console.log(album);

// 获取歌手信息
const singer = await migu.getSingerIndex('singerId');
console.log(singer);
```


### 类型导入

```typescript
import type { MiguClient } from 'migu-api-enhanced';

const client: MiguClient = createClient();
```

### 类型检查

项目包含完整的类型声明文件，安装后会自动获得类型支持。

## 下一步

- [API 接口文档](api/search.md) - 查看详细接口说明
- [示例代码](examples/npm-example.md) - 查看更多使用示例