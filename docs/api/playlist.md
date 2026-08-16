# 歌单接口

## 播放列表信息

**接口地址**: `/playlist/info`  
**导出函数**: `getPlaylistInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| playlistId | string | 是 | 歌单 ID | 231760782 |

### 请求示例

```
/playlist/info?playlistId=231760782
```

---

## 播放列表歌曲

**接口地址**: `/playlist/song`  
**导出函数**: `getPlaylistSong`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| playlistId | string | 是 | 歌单 ID | 231760782 |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 50 | 50 |

### 请求示例

```
/playlist/song?playlistId=231760782&page=1&size=50
```

---

## 电台歌曲列表

**接口地址**: `/radio/song`  
**导出函数**: `getRadioSong`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| radioId | string | 是 | 电台 ID | 34799270 |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/radio/song?radioId=34799270&page=1
```

---

## 匹配外部歌单

**接口地址**: `/playlist/match`
**导出函数**: `matchPlaylist`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| url | string | 是 | 歌单 URL | https://t1.kugou.com/7LAal80G3V2 |

?> 内部已处理encodeURIComponent，官方服务器与此代理叠加可能导致响应时间过长。

### 请求示例

```
/playlist/match?url=https://t1.kugou.com/7LAal80G3V2
```

---

## VIP热歌

**接口地址**: `/playlist/vip`  
**导出函数**: `getVipPlaylist`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| size | number | 否 | 每页数量，默认 10 | 9 |

### 请求示例

```
/playlist/vip?size=9
```

---

## 歌单广场-界面

**接口地址**: `/playlist/square/page`
**导出函数**: `getSquarePage`
无参数

返回的歌单广场数据包含多个 `columnId` 键，可通过 [columnId接口](column.md#栏目信息) 获取。处理较复杂。

---

## 歌单广场-tab

**接口地址**: `/playlist/square/tag`
**导出函数**: `getSquareTag`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| needMoreTag | boolean | 否 | 是否需要更多标签，默认 true | true |

---

## 歌单广场-标签获取歌单

**接口地址**: `/playlist/square/listByTag`
**导出函数**: `getSquareListByTag`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| tagId | string | 是 | 标签 ID | 1003449963 |
| page | number | 否 | 页码，默认 1 | 1 |

---

## 歌单广场-推荐歌单

**接口地址**: `/playlist/square/recommend`
**导出函数**: `getSquareRecommend`

无参数

---

