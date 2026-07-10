# 用户接口

?> 以下接口均需要登录后获取的 `pacmtoken` 作为凭证，可通过 [登录认证](passport.md) 接口获取。

?> 接口返回数据中除业务数据外，还会包含 `pacmtoken` 字段，用于获取刷新后的登录凭证。

---

## 用户徽章

**接口地址**: `/user/badge`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/badge?pacmtoken=xxx
```

---

## 用户信息

**接口地址**: `/user/info`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/info?pacmtoken=xxx
```

---

## 用户主页

**接口地址**: `/user/homePage`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/homePage?pacmtoken=xxx
```

---

## 今日推荐

**接口地址**: `/user/recommend/today`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

### 请求示例

```
/user/recommend/today?pacmtoken=xxx
```

---

## 用户收藏

**接口地址**: `/user/collect`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/user/collect?pacmtoken=xxx&page=1&size=20
```

---

## 我的歌单

**接口地址**: `/user/myList`  
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
