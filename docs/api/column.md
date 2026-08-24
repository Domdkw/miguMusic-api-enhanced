# 栏目接口

## 排行榜 Tab

**接口地址**: `/rank/index`  
**导出函数**: `getRankIndex`

无参数

### 请求示例

```
/rank/index
```

---

## 排行榜内容

**接口地址**: `/rank/info`  
**导出函数**: `getRankInfo`

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

## 主页Tab

**接口地址**: `/page/tab`  
**导出函数**: `getPageTab`

无参数

### 请求示例

```
/page/tab
```

---

## 获取界面

**接口地址**: `/page/info`  
**导出函数**: `getPageInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| id | string | 是 | 页面 ID (原来的 sceneId 或 pageId) | 88418111 |
| type | string | 是 | 页面id类型 | sceneId / pageId |

### 请求示例

```
/page/info?id=88418111&type=sceneId
```

---

## 获取数据源

**接口地址**: `/page/dataSource`  
**导出函数**: `getPageDataSource`
**请求方法：POST**

### 参数说明

请求体： （建议传入原pageinfo中的值）
```json
[
  {
    "dataId": "a36991bbdcce434cbe03bd052f348027", //$.data.containers[1].components[0].dataSource.id
    "styleCode": "com_s_column_title_style_v1"
  },
  {
    "dataId": "68ed86c54e4f49d0a8b8d963805ced7d", //$.data.containers[2].components[0].dataSource.id
    "limit": 9, //$.data.containers[2].components[0].dataSource.showNum
    "styleCode": "com_s_column_title_style_v1" //$.data.containers[2].components[0].styleCode
  }
]
```

---

## 获取滚动数据

**接口地址**: `/page/scroll`  
**导出函数**: `getPageScroll`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| dataId | string | 是 | 数据源 ID | d402eafbdca64bd1978ab980f98d8fc8 |
| page | number | 否 | 页码 | 1 |
| size | number | 否 | 每页数量 | 20 |
| styleCode | string | 否 | 样式代码 | com_s_column_title_style_v1  |

---

## 栏目信息

**接口地址**: `/column/info`  
**导出函数**: `getColumnInfo`

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
**导出函数**: `getNewSongList`
无参数

### 请求示例

```
/column/newSong
```

处理请查阅： [处理流程](#处理示例)

---

## 新碟上架

**接口地址**: `/column/newCD`  
**导出函数**: `getNewCDList`
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
