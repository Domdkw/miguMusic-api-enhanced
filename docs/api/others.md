# 其他接口

## 评论接口

**接口地址**: `/comment`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| resourceId | string | 是 | 资源 ID | 600929000001520013 |
| resourceType | string | 是 | 资源类型 | 2 |
| hotCommentStart | number | 否 | 热门评论起始位置，默认 0 | 0 |
| size | number | 否 | 数量，默认 20 | 20 |

### 请求示例

```
/comment?resourceId=600929000001520013&resourceType=2&hotCommentStart=0&size=20
```

---

## 安装包信息

**接口地址**: `/version`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| channel | string | 否 | 渠道 ID |  |
| ua | string | 否 | UA | 2 |
| version | number | 否 | 版本号 |  |

!> 提醒：建议全都不传入，使用推荐参数，除非你知道做的是正确的
### 请求示例

```
/version
```
