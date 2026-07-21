# 播放地址接口

## 话说前头

欢迎大佬对接口进行贡献，谢谢啦 (¬_¬ )

?> contentId 和 copyrightId 是歌曲的唯一标识，可以二选一。都传 > contentId > copyrightId

## 播放地址 v1

**接口地址**: `/url/v1`  
**请求方法**: `GET`

未加密

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000003297424 |
| copyrightId | string | 是 | Copyright ID | 6005974GS6W |
| resourceType | string | 否 | 资源类型，默认值为 2（歌曲） | 2 |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

### 请求示例

```
/url/v1?contentId=600929000003297424&copyrightId=6005974GS6W&resourceType=2
```

---

## 播放地址 v2

**接口地址**: `/url/v2`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000000900351 |
| copyrightId | string | 是 | Copyright ID | 6005753G176 |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

?> 在有cookie:pacmtoken(是VIP用户)的情况下，可以播放 VIP 歌曲。使用范围：c.migu.cn微信歌曲分享，music.migu.cn PC版网页播放歌曲

### 请求示例

```
/url/v2?contentId=600929000000900351&copyrightId=6005753G176&toneFlag=PQ
```

---

## 播放地址 h5v2.4

**接口地址**: `/url/h5v2.4`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000001520013 |
| copyrightId | string | 是 | Copyright ID | 6005753GBKS |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

### 请求示例

```
/url/h5v2.4?contentId=600929000001520013&copyrightId=6005753GBKS&toneFlag=PQ
```
---

## 数据库url接口

**接口地址**: `/url/db`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000000900351 |

### 请求示例

```
/url/db?contentId=600929000000900351
```

### 响应示例

```json
{
  "success": true,
  "url": "https://.mp3"
}
```
---
