# 推荐接口

## 推荐歌曲

**接口地址**: `/recommend/song`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| scene | string | 否 | 场景，`TODAY_RECOMMEND` 或 `PRIVATE_FM`，默认 `TODAY_RECOMMEND` | TODAY_RECOMMEND |
| size | number | 否 | 数量，`PRIVATE_FM` 场景下无效，默认 10 | 10 |

### 请求示例

```
/recommend/song?scene=TODAY_RECOMMEND&size=10
```

---

## 推荐电台

**接口地址**: `/recommend/radio`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| type | number | 否 | 电台类型，`1` 上瘾电台，`2` 听见不同，默认 `1` | 1 |

### 请求示例

```
/recommend/radio?type=1
```

---

## 推荐播放列表

**接口地址**: `/recommend/playlist`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| scene | string | 是 | 场景 | recommend_playlist |

### 请求示例

```
/recommend/playlist?scene=recommend_playlist
```

---

## 相似歌曲

**接口地址**: `/recommend/similarSong`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | 歌曲 ID | 600929000000900351 |

### 请求示例

```
/recommend/similarSong?contentId=600929000000900351
```
