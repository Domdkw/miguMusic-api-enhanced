# 歌单接口

## 播放列表信息

**接口地址**: `/playlist/info`  
**请求方法**: `GET`

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
**请求方法**: `GET`

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

## 获取歌单广场

**接口地址**: `/playlist/square/page`
**请求方法**: `GET`
无参数

### 请求示例

```
/playlist/square/page
```

返回的歌单广场数据包含多个 `columnId` 键，可通过 [columnId接口](column.md#栏目信息) 获取。处理较复杂。

---

## 电台歌曲列表

**接口地址**: `/radio/song`  
**请求方法**: `GET`

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
