# 其他接口

## 获取评论

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

无

### 请求示例

```
/version
```
---

### 此应用接口

`/`: 返回此应用的版本信息
```json
{
    "message": "Migu API Enhanced",
    "version": "版本号",
    "status": "running",
    "runtime": "Node.js/bun/workerd/<others>",
    "dbEnabled": "数据库启用状态",
    "allowedOrigins": "允许的cors",
}
```
