# 用户接口

?> 以下接口均需要登录后获取的 `pacmtoken` 作为凭证，可通过 [登录认证](passport.md) 接口获取。

?> 接口返回数据中除业务数据外，还会包含 `pacmtoken` 字段，用于获取刷新后的登录凭证。

***

## 用户徽章

**接口地址**: `/user/badge`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/badge?pacmtoken=xxx
```

***

## 用户信息

**接口地址**: `/user/info`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/info?pacmtoken=xxx
```

***

## 用户主页

?> 用户主页接口返回数据中包含：我喜欢，私人歌单 等等

**接口地址**: `/user/homePage`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/homePage?pacmtoken=xxx
```

***

## 我喜欢-添加

**接口地址**: `/user/like`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| contentIds | string | 是 | 歌曲 ID 列表，多个 ID 用逗号分隔，例如：1,2,3 | 1 |

### 请求示例

```
/user/like?pacmtoken=xxx&contentIds=1,2,3
```

***

## 我喜欢-移除

**接口地址**: `/user/dislike`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| contentId | string | 是 | 单个歌曲 ID | 1 |

添加接口支持`contentIds`的列表传入，移除接口只能移除单个歌曲的`contentId`

### 请求示例

```
/user/dislike?pacmtoken=xxx&contentId=1
```

***

## 今日推荐

**接口地址**: `/user/recommend/today`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/recommend/today?pacmtoken=xxx
```

***

## 收藏-列表

**接口地址**: `/user/collect/list`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/user/collect/list?pacmtoken=xxx&page=1&size=20
```

***

## 收藏-添加

**接口地址**: `/user/collect/add`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| playlistId | number | 是 | 歌单 ID | 234040856 |
| title | string | 是 | 歌单标题 | 抖音DJ热曲：开车提神不犯困 |

### 请求示例

```
/user/collect/add?pacmtoken=xxx&playlistId=234040856&title=抖音DJ热曲：开车提神不犯困
```

***

## 收藏-移除

**接口地址**: `/user/collect/remove`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| playlistId | number | 是 | 歌单 ID | 234040856 |

### 请求示例

```
/user/collect/remove?pacmtoken=xxx&playlistId=234040856
```

***

## 自建歌单-列表

**接口地址**: `/user/myList`\
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| queryType | number | 否 | 查询类型，默认 0 | 0 |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/user/myList?pacmtoken=xxx&queryType=0&page=1&size=20
```

***

## 自建歌单-操作

**请求方法**: `GET`

### 参数说明

| 参数名        | 类型     | 说明    | 示例     |
| ---------- | ------ | ----- | ------ |
| pacmtoken  | string | 登录凭证  | <br /> |
| title      | string | 歌单名称  | 自建歌单   |
| playlistId | number | 歌单 ID | 123456 |

### 添加

**接口地址**: `/user/myList/add`

需要 ： pacmtoken, title

```
/user/myList/add?pacmtoken=xxx&title=自建歌单
```

### 移除

**接口地址**: `/user/myList/remove`

需要 ： pacmtoken, playlistId

```
/user/myList/remove?pacmtoken=xxx&playlistId=123456
```

### 编辑

**接口地址**: `/user/myList/edit`

需要 ： pacmtoken, playlistId, title

```
/user/myList/edit?pacmtoken=xxx&playlistId=123456&title=自建歌单
```

***

