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

**接口地址**: `/playlist/square`  
**请求方法**: `GET`

### 参数说明
无

### 请求示例

```
/playlist/square
```

---

