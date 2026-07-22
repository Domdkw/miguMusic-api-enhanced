# 栏目接口

## 排行榜 Tab

**接口地址**: `/rank/index`  
**请求方法**: `GET`

### 参数说明

无需参数

### 请求示例

```
/rank/index
```

---

## 排行榜内容

**接口地址**: `/rank/info`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| rankId | string | 是 | 排行榜 ID | 27553319 |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/rank/info?rankId=27553319&page=1
```

---

## 栏目信息

**接口地址**: `/column/info`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| columnId | string | 是 | 栏目 ID | 15279065 |

### 请求示例

```
/column/info?columnId=15279065
```

?> 此接口会返回`<=200`条数据，特别需要处理[资源类型](resource.md#资源类型)。[Postman API测试](https://raw.githubusercontent.com/Domdkw/miguMusic-api-enhanced/refs/heads/main/test/postman/enhanced-api.postman_collection.json)

---

## 新歌速递

**接口地址**: `/column/newSong`  
**请求方法**: `GET`
无参数

### 请求示例

```
/column/newSong
```

处理请查阅： [处理流程](#处理示例)

---

## 新碟上架

**接口地址**: `/column/newCD`  
**请求方法**: `GET`
无参数


### 请求示例

```
/column/newCD
```

### 处理示例

需要处理 `.data.contentItemList[0].itemList[i].actionUrl` 中的值。例如：

```json
{
    "actionUrl": "http://app.c.nf.migu.cn/MIGUM3.0/v1.0/template/get-new-cd-list-data?templateVersion=1&columnId=15279065&start=1&count=20"
}
```
需要提取 `columnId` 参数，值为 `15279065`。后通过 [column/info](#栏目信息) 接口获取栏目信息。

---
