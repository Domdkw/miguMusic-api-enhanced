# 搜索接口

## 全局

typeOrder : 类型排序，默认 0，0-默认，1-最新，2-最热

## 搜索歌曲

**接口地址**: `/search`  
**导出函数**: `searchSong`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/search?text=APT.&page=1&size=20
```

---

## 搜索播放列表

**接口地址**: `/search/playlist`  
**导出函数**: `searchPlaylist`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |
| typeOrder | number | 否 | 类型排序，默认 0 | 0 |

---

## 热门搜索

**接口地址**: `/search/hot`  
**导出函数**: `getSearchHot`

无需参数

---

## 默认搜索文本

**接口地址**: `/search/default`  
**导出函数**: `getSearchDefault`

无参数

---

## 搜索歌手

**接口地址**: `/search/singer`  
**导出函数**: `searchSinger`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |

### 请求示例

```
/search/singer?text=APT.
```

---

## 搜索专辑

**接口地址**: `/search/album`  
**导出函数**: `searchAlbum`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | lighting |
| page | number | 否 | 页码，默认 1 | 1 |
| typeOrder | number | 否 | 类型排序，默认 0 | 0 |

### 请求示例

```
/search/album?text=lighting&page=1&typeOrder=0
```

---

## 搜索 MV

**接口地址**: `/search/video`  
**导出函数**: `searchMv`

[MV接口](mv.md#mv-详情)

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |
| typeOrder | number | 否 | 类型排序，默认 0 | 0 |

### 请求示例

```
/search/video?text=APT.&page=1&typeOrder=0
```

---

## 搜索歌词

**接口地址**: `/search/lrc`  
**导出函数**: `searchLrc`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/search/lrc?text=APT.&page=1
```

---

## 搜索短视频

请详看 [搜索 短视频](svideo.md#搜索短视频)

[短视频搜索建议](svideo.md#短视频搜索建议)

## 搜索彩铃

**接口地址**: `/search/rbt`  
**导出函数**: `searchRbt`

[彩铃接口](svideo.md#视频彩铃url)

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/search/rbt?text=APT.&page=1
```

---

## 搜索演唱会

**接口地址**: `/search/concert`  
**导出函数**: `searchConcert`

[演唱会接口](mv.md#演唱会-简略信息)

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |


### 请求示例

```
/search/concert?text=APT.&page=1
```

---

## 搜索票务

**接口地址**: `/search/ticket`  
**导出函数**: `searchTicket`

[所有票务](resource.md#票务信息)


### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/search/ticket?text=APT.&page=1
```

---

## 歌手标签

**接口地址**: `/search/singerTab`  
**导出函数**: `getSearchSingerTab`

### 参数说明

无需参数

### 请求示例

```
/search/singerTab
```

---

## 歌手列表

**接口地址**: `/search/singerTab/list`  
**导出函数**: `getSearchSingerTabList`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| tab | string | 是 | 歌手标签 | huayu-nan |

### 请求示例

```
/search/singerTab/list?tab=huayu-nan
```
