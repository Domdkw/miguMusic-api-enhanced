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
