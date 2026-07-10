# 登录认证接口

!> 警告：账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；

重要的事情说三遍；
因为本项目的源代码是开源的，后端可以劫持你的流量，获取你的账号信息

!> 如果你作为开发者，强烈建议使用SDK登录认证，而不是直接使用账号密码登录接口

## SIM 卡登录（移动）

?> 通过中国移动 SIM 卡认证实现一键登录，整个流程分两步：
> 1. 调用 `/login/sim/send` 发送加密后的手机号并获取 `sessionId`；
> 2. 调用 `/login/sim/query` 使用 `sessionId` 轮询查询登录结果。

---

## 发送 SIM 登录请求

**接口地址**: `/login/sim/send`  
**请求方法**: `GET`

服务端会通过 RSA 公钥加密手机号，再向咪咕通行证发起 SIM 认证请求，返回的 `sessionId` 用于后续轮询登录结果。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| phone | string | 是 | 待登录的手机号 | 12300001111 |

手机号是明文的，实际运行中，请使用你信任的后端服务；

### 返回示例

```json
{
  "success": true,
  "data": {
    "sim_sessionid": "xxxxxxxxxxxxxxxx"
  }
}
```

### 请求示例

```
/login/sim/send?phone=13800138000
```

---

## 查询 SIM 登录结果

**接口地址**: `/login/sim/query`  
**请求方法**: `GET`

配合 `/login/sim/send` 轮询使用。当返回 `error: waiting` 时表示运营商侧还在确认，请稍后再试；当状态码为 `2000` 时表示登录成功。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| sessionId | string | 是 | sim 登录会话 ID，由 `/login/sim/send` 返回 | xxxxxxxxxxxxxxxx |
| isNeedPacm | string | 否 | 是否同时获取 pacmtoken，1 为是，默认 0 | 1 |

### 请求示例

```
/login/sim/query?sessionId=xxxxxxxxxxxxxxxx&isNeedPacm=1
```

---

## 获取 PACM Token

**接口地址**: `/passport/getPacmToken`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 默认值 |
| ------- | ------ | ------ | ------ | ------ |
| token | string | 是 | Token | - |
| type | number | 否 | 类型 | 2 |
| sourceId | string | 否 | Source ID | 220029 |

建议带一个token就可以了，其他的不懂不要改（我也不懂有啥用）

### 请求示例

```
/passport/getPacmToken?token=YOUR_TOKEN
```

---

## 校验 Token

**接口地址**: `/passport/checkToken`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | PACM Token | - |

### 请求示例

```
/passport/checkToken?pacmtoken=YOUR_PACMTOKEN
```
