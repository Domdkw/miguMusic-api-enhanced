# 播放地址接口

## 话说前头

希望有大佬能够找到更多可以播放试听歌曲的接口，为接口添砖加瓦，谢谢啦 (¬_¬ )

如果有大神能够apk dexdump的出源码的话，不胜感激🤗

## 播放地址 v1

**接口地址**: `/url/v1`  
**请求方法**: `GET`

未加密

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000003297424 |
| copyrightId | string | 是 | Copyright ID | 6005974GS6W |
| resourceType | string | 是 | 资源类型 | 2 |
| toneFlag | string | （不建议传入） | 音质标识（默认 PQ） | PQ |

### 请求示例

```
/url/v1?contentId=600929000003297424&copyrightId=6005974GS6W&resourceType=2
```

---

## 播放地址 v2

**接口地址**: `/url/v2`  
**请求方法**: `GET`

此接口已在后端自动进行解密，原返回值为加密blob

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000000900351 |
| copyrightId | string | 是 | Copyright ID | 6005753G176 |
| resourceType | string | 是 | 资源类型 | 2 |
| netType | string | 否 | 网络类型 | 01 |
| toneFlag | string | （不建议传入） | 音质标识（默认 PQ） | PQ |

?> 在有cookie:pacmtoken(是VIP用户)的情况下，可以播放 VIP 歌曲。使用范围：c.migu.cn微信歌曲分享，music.migu.cn PC版网页播放歌曲

### 请求示例

```
/url/v2?contentId=600929000000900351&copyrightId=6005753G176&resourceType=2
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
| resourceType | string | 是 | 资源类型 | 2 |
| netType | string | 否 | 网络类型 | 01 |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

?> 此接口可以播放/试听 VIP 歌曲，使用范围：y.migu.cn歌单歌曲分享，m.music.migu.cn播放歌曲，h5.hf.migu.cn活动页
原返回值为加密blob

### 请求示例

```
/url/h5v2.4?contentId=600929000001520013&copyrightId=6005753GBKS&resourceType=2
```
