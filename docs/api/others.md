# 其他接口

## 安装包信息

**接口地址**: `/version`  
**导出函数**: `getVersion`

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
