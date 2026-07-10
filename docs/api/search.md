# 搜索接口

## 全局
typeOrder : 类型排序，默认 0

## 搜索歌曲

**接口地址**: `/search`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/search?text=APT.&page=1&size=20
```

---

## 搜索歌手

**接口地址**: `/search/singer`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |

### 请求示例

```
/search/singer?text=APT.
```

---

## 搜索专辑

**接口地址**: `/search/album`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | lighting |
| page | number | 否 | 页码，默认 1 | 1 |
| typeOrder | number | 否 | 类型排序，默认 0 | 0 |

### 请求示例

```
/search/album?text=lighting&page=1&typeOrder=0
```

---

## 热门搜索

**接口地址**: `/search/hot`  
**请求方法**: `GET`

### 参数说明

无需参数

### 请求示例

```
/search/hot
```

---

## 默认搜索文本

**接口地址**: `/search/default`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| resourceVersion | number | （不建议传入） | 资源版本，默认 2 | 2 |

!> 建议传入参数为空，使用默认值除非你知道你在干什么
### 请求示例

```
/search/default?resourceVersion=2
```

---

## 搜索彩铃

**接口地址**: `/search/rbt`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/search/rbt?text=APT.&page=1
```

---

## 搜索演唱会

**接口地址**: `/search/concert`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |


### 请求示例

```
/search/concert?text=APT.&page=1
```

---

## 搜索视频（mv）

**接口地址**: `/search/video`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |
| typeOrder | number | 否 | 类型排序，默认 0 | 0 |

### 请求示例

```
/search/video?text=APT.&page=1&typeOrder=0
```

---

## 搜索票务

**接口地址**: `/search/ticket`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| text | string | 是 | 搜索关键词 | APT. |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/search/ticket?text=APT.&page=1
```

---

## 歌手标签

**接口地址**: `/search/singerTab`  
**请求方法**: `GET`

### 参数说明

无需参数

### 请求示例

```
/search/singerTab
```

---

## 歌手列表

**接口地址**: `/search/singerTab/list`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| tab | string | 是 | 歌手标签 | huayu-nan |
| templateVersion | number | （不建议传入） | 模板版本，默认 3 | 3 |

### 请求示例

```
/search/singerTab/list?tab=huayu-nan&templateVersion=3
```
