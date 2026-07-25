# MV 接口

## MV 详情

**接口地址**: `/mv/info`  
**请求方法**: `GET`

可以从此接口返回的 resource[].rateFormats[].url 中提取出mp4播放地址。

返回的MP4 URL为相对路径，需要在前端拼接 `https://freevod.nf.migu.cn` 以获得完整路径。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| mvContentId | string | 是 | MV Content ID | 600906000000476885 |

### 请求示例

```
/mv/info?mvContentId=600906000000476885
```

---

## 根据 MV 推荐

**接口地址**: `/mv/recommend`  
**请求方法**: `GET`

可以从此接口返回的 data[].rateFormats[].url 中提取出mp4播放地址。

返回的MP4 URL为相对路径。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| mvContentId | string | 是 | MV Content ID | 600906000000476885 |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/mv/recommend?mvContentId=600906000000476885&page=1
```

---

## MV HLS 播放地址

**接口地址**: `/mv/hls`  
**请求方法**: `GET`

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

## 演唱会-简略信息

**接口地址**: `/mv/concert/info`  
**请求方法**: `GET`

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
**请求方法**: `GET`

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
**请求方法**: `GET`

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
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| concertId | string | 是 | Concert ID | 87783043 |

### 请求示例

```
/mv/concert/comment?concertId=87783043
```

---
