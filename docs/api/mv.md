# MV 接口

## MV 详情

**接口地址**: `/mv/info`  
**导出函数**: `getMvInfo`

可以从此接口返回的 resource[].rateFormats[].url 中提取出mp4播放地址。

返回的MP4 URL为相对路径，需要在前端拼接 `https://freevod.nf.migu.cn` 以获得完整路径。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| mvContentIds | string | 是 | MV Content ID (逗号分隔) | 600906000000476885,600906000000438741 |

### 请求示例

```
/mv/info?mvContentIds=600906000000476885,600906000000438741
```

---

## MV HLS 播放地址

**接口地址**: `/mv/hls`  
**导出函数**: `getMvHls`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| mvContentId | string | 是 | MV Content ID | 600906000000476885 |
| mvCopyrightId | string | 是 | MV Copyright ID | 690273Y0015 |
| url | string | 是 | URL 参数 | - |
| size | number | 是 | 大小 | 38641875 |
| format | string | 否 | 画质，默认 050019 (HQ高清) | 050019 |
| needHttps | boolean | 否 | 是否 HTTPS，默认 true | true |

!> 上述参数都需要从 `/mv/info` 接口获取

### 请求示例

```
/mv/hls?size=38641875&format=050019&mvContentId=600906000000476885&mvCopyrightId=690273Y0015
```

---

## 根据 MV 推荐 MV

**接口地址**: `/mv/recommend`  
**导出函数**: `getMVRecommend`

?> 返回的MP4 URL为相对路径。可以从此接口返回的 $.data[].rateFormats[].url 中提取出mp4播放地址。需要拼接 `https://freevod.nf.migu.cn` 

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| mvContentId | string | 是 | 单个 MV Content ID | 600906000000476885 |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/mv/recommend?mvContentId=600906000000476885&page=1
```

---

## 根据 SongId / ConcertId 推荐 MV

### 歌曲推荐 MV

**接口地址**: `/mv/bySong`  
**导出函数**: `getMvBySong`

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| songId | string | 是 | Song ID (搜索/resource获取) | 3871226 |

```
/mv/bySong?songId=3871226
```

### 演唱会推荐 MV

**接口地址**: `/mv/concert/recommendMv`  
**导出函数**: `getConcertRecommendMv`

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |

```
/mv/concert/recommendMv?concertId=87783043
```

---

## 演唱会-简略信息

**接口地址**: `/mv/concert/info`  
**导出函数**: `getConcertInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |

### 请求示例

```
/mv/concert/info?concertId=87783043
```

---

## 演唱会-url

**接口地址**: `/mv/concert/url`  
**导出函数**: `getConcertUrl`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |
| liveId | string | 是 | Live ID | 657367212 |
| rateLevel | string | 是 | 画质等级 | 3 |

?> 1:普通 2:高清 3:超清 (默认 1)， `liveId` 需要从 [/mv/concert/info](#演唱会-简略信息) 接口获取。

### 请求示例

```
/mv/concert/url?concertId=87783043&liveId=657367212&rateLevel=3
```

---

## 演唱会-详细拓展

**接口地址**: `/mv/concert/detail`  
**导出函数**: `getConcertDetail`

移动端演唱会详情
- `$.data.contentItemList[0].itemList[0]` 此演唱会简略信息
- `$.data.contentItemList[3].itemList` 精选视频-列表
- `$.data.contentItemList[6].itemList` 热门演唱会-列表

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |

### 请求示例

```
/mv/concert/detail?concertId=87783043
```

---

## 演唱会-评论

**接口地址**: `/mv/concert/comment`  
**导出函数**: `getConcertComment`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |

### 请求示例

```
/mv/concert/comment?concertId=87783043
```

---
