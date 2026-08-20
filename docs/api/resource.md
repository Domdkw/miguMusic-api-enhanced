# 资源接口

## 资源类型

2002-歌手，2003-专辑，2-歌曲，2016-电台，2021-歌单，3002-评论，6000-短视频，D-MV，M-视频彩铃，5-数字专辑

**导出函数:** `getResourceId`

## 获取歌曲歌词

**接口地址**: `/lyric`  
**导出函数**: `getLyric`

MRC 解密：`decryptMrc`
mrc返回标准LRC逐字歌词格式

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | 单个Content ID | 600929000001520013 |
| type | string | 否 | 歌词类型，逗号分隔，默认lrc | lrc,trc,mrc |

### 请求示例

```
/lyric?contentId=600929000001520013&type=mrc
```

### 响应示例

```json
{
  "lrc": "[00:01.00]APT. - ROSÉ/Bruno Mars",
  "success": true,
  "lrcUrl": "https://d.musicapp.migu.cn/xx/xxx"
}
```

---

## 资源信息

**接口地址**: `/resourceinfo`  
**导出函数**: `getResourceInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| resourceIds | string | 是 | 资源 ID 列表（逗号分隔） | 1131254786,1000002956 |
| copyrightIds | string | 是 | 版权 ID 列表（逗号分隔） | ... |
| resourceType | string | 是 | 资源类型 | 2002 |

!> 资源id和版权id二选一传入；音乐资源请使用 [获取歌曲信息](#获取歌曲信息)

### 请求示例

```
/resourceinfo?resourceIds=1131254786,1000002956&resourceType=2002
```

---

## 获取歌曲信息

**接口地址**: `/songinfo`  
**导出函数**: `getSongInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentIds | string | 是 | 歌曲 ID 列表（逗号分隔） | 600919000007791840,600929000001520013 |

---

## 获取评论

**接口地址**: `/comment`  
**导出函数**: `getComment`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| resourceId | string | 是 | 资源 ID | 600929000001520013 |
| resourceType | string | 是 | 资源类型 | 2 |
| hotCommentStart | number | 否 | 热门评论起始位置，默认 0 | 0 |
| size | number | 否 | 数量，默认 20 | 20 |

### 请求示例

```
/comment?resourceId=600929000001520013&resourceType=2&hotCommentStart=0&size=20
```

---

## 检查歌曲是否可听

**接口地址**: `/can-listen`  
**导出函数**: `checkCanListen`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentIds | string | 是 | Content ID 列表（逗号分隔） | 600902000000173077,600929000000900351 |

### 请求示例

```
/can-listen?contentIds=600902000000173077,600929000000900351
```

---

## 歌曲播放次数

**接口地址**: `/opNum`  
**导出函数**: `getOpNum`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| ids | string | 是 | 资源 ID 列表（逗号分隔） | 233851696,234592877 |

### 请求示例

```
/opNum?ids=233851696,234592877
```

---

## 票务信息

**接口地址**: `/ticket`  
**导出函数**: `getTicketInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| page | number | 否 | 页码，默认 1 | 1 |
| pageCount | number | 否 | 每页数量，默认 10 | 10 |

### 请求示例

```
/ticket?page=1&pageCount=10
```

---

## 分享链接

### 歌曲 / 专辑 / 歌手 / 歌单

**导出函数**: `shareCommon`

**基础参数：**

| 参数名 | 类型 | 必填 | 说明 
| ------- | ------ | ------ | ------ |
| contentId | string | 是 | 歌曲contentId / albumId / artistId / playlistId |
| contentName | string | 是 | 歌曲名称 / 专辑名称 / 歌手名称 / 播放列表名称 |
| targetUserName | string | 否 | 当前 歌单作者/歌手 名称 |

**额外参数：**

| 类型 | 接口 | 额外参数 |
| ------ | ------ | ------ |
| 歌曲 | `/share/song` | copyrightId |
| 专辑 | `/share/album` |  |
| 歌手 | `/share/singer` |  |
| 歌单 | `/share/playlist` |  |
| 数字专辑 | `/share/dalbum` |  |

### 短视频 / MV

**导出函数**: `shareVideo`

| 类型 | 接口 |
| ------ | ------ |
| MV | `/share/mv` |
| 短视频 | `/share/svideo` |
| 视频彩铃 | `/share/vrbt` |

**基础参数：**

| 参数名 | 类型 | 必填 | 说明 
| ------- | ------ | ------ | ------ |
| contentId | string | 是 | 短视频id / MVid / vrbtId |
| userId | string | 是 | 视频用户ID |

---

