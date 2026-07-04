# 推荐接口

## 推荐歌曲

**接口地址**: `/recommend/song`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| actionId | number | 是 | Action ID | 1 |
| scene | string | 是 | 场景 | TODAY_RECOMMEND |
| size | number | 是 | 数量 | 3 |

### 请求示例

```
/recommend/song?actionId=1&scene=TODAY_RECOMMEND&size=3
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
