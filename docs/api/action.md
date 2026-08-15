# 活动接口

## 呢喃-歌曲列表

**接口地址**: `/activity/ninan/song`  
**导出函数**: `getNinanSong`

无参数

---

## 呢喃-日期歌曲

**接口地址**: `/activity/ninan/date`  
**导出函数**: `getNinanByDate`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| date | string | 是 | 日期 | 20260713 |

!> 日期格式为 YYYYMMDD，有些时间没有呢喃歌曲，会返回默认歌曲

### 请求示例

```
/ninan/date?date=20260713
```

---

## 呢喃-签到信息

**接口地址**: `/activity/ninan/sign/info`  
**导出函数**: `getNinanSignInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---

## 呢喃-签到

**接口地址**: `/activity/ninan/sign`  
**导出函数**: `signNinan`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---

## AI豆-签到

**接口地址**: `/activity/ai-bean/sign`  
**导出函数**: `signAiBean`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---

## AI豆-数量

**接口地址**: `/activity/ai-bean/count`  
**导出函数**: `getAiBeanCount`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---

## AI豆-签到状态

**接口地址**: `/activity/ai-bean/status`  
**导出函数**: `getAiBeanSignStatus`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---

## AI豆-兑换

**接口地址**: `/activity/ai-bean/redeem`  
**导出函数**: `redeemAiBean`

兑换一天的天籁会员。具体需要的ai豆数量依咪咕音乐官方决定。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 用户认证 token | 0 |

---