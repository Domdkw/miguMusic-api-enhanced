# 播放地址接口

## 话说前头

欢迎大佬对接口进行贡献，谢谢啦 (¬_¬ )

?> contentId 和 copyrightId 是歌曲的唯一标识，可以二选一。都传 > contentId > copyrightId

?> 请记住，每个接口都有它的使用价值🧐😏，不会放没什么用的上去。例如没有放上去的没用接口(mini2.4)

?> 接口后端默认走PQ，传入其他的会自动转换，转换后`url`，转换前`oriUrl`。

<details>
<summary>获取歌曲的任意质量的播放地址</summary>

例如获取的PQ: https://freetyst.nf.migu.cn/public/product9th/product46/2024/09/1213/2024年09月11日23点35分内容准入华纳9首515217/标清高清/MP3_128_16_Stero/6005753G176132921.mp3

更改 `标清高清/MP3_128_16_Stero/id.mp3`

- **PQ** 标清高清/MP3_128_16_Stero/id.mp3
- **HQ** 标清高清/MP3_320_16_Stero/id.mp3
- **SQ** 歌曲下载/flac/id.flac
- **ZQ24** 歌曲下载/flac_24bit/id.flac
- **ZQ32** 歌曲下载/wav_32bit/id.wav
- **Z3D** 歌曲下载/wav_3d/id.wav (流媒体，浏览器无法直接播放，仅下载)
- **3D60** 歌曲下载/wav_3d_60s/id.wav (自定义，60秒片段(h5)，网页可播放)

音质信息获取：搜索/resourceinfo

导出utils： `/src/utils/quality.ts`

</details>

## 播放重定向

**接口地址**: `/url/redirect`  
**请求方法**: 直接放入`<audio>`标签中，301重定向到播放地址
**导出函数**: `getRedirectUrl`

原文：大象已无形 https://www.cnblogs.com/mmm/p/migu_music_api.html

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000003297424 |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

---

## 播放地址 m2

**接口地址**: `/url/m2`  
**导出函数**: `getUrlM2`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600902000006889466 (爱在西元前) |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |
| copyrightId | string | 否 | Copyright ID | 60054701898 |
| songId | string | 否 | 歌曲 ID | 2498 |
| albumId | string | 否 | 专辑 ID | 7948 |

---

## 播放地址 dlv1

**接口地址**: `/url/dlv1`  
**导出函数**: `getDLUrlV1`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| songId | string | 是 | 歌曲 ID | 3853 (恭喜发财) |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

?> 建议使用listen接口，dl接口限制较多

---

## 播放地址 v1

**接口地址**: `/url/v1`  
**导出函数**: `getUrlV1`

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
**导出函数**: `getUrlV2`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| contentId | string | 是 | Content ID | 600929000000900351 |
| copyrightId | string | 是 | Copyright ID | 6005753G176 |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

?> 在有cookie:pacmtoken(是VIP用户)的情况下，可以播放 VIP 歌曲。使用范围：c.migu.cn微信歌曲分享，music.migu.cn PC版网页播放歌曲

?> 此接口未配置音质转换，老老实实登录吧 [狗头]

### 请求示例

```
/url/v2?contentId=600929000000900351&copyrightId=6005753G176&toneFlag=PQ
```

---

## 播放地址 h5v2.4

**接口地址**: `/url/h5v2.4`  
**导出函数**: `getUrlH5V24`

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
**导出函数**: 无

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

## 咪咕云盘播放地址

**接口地址**: `/user/cloud/url`  
**导出函数**: `getCloudUrl`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| contentId | string | 是 | 内容 ID | - |
| toneFlag | string | 否 | 音质标识（默认 PQ） | PQ |

---

