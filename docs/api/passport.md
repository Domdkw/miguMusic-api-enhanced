# 登录认证接口

!> 警告：账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；

重要的事情说三遍；
因为本项目的源代码是开源的，后端可以劫持你的流量，获取你的账号信息

!> 如果你作为开发者，强烈建议使用SDK登录认证，而不是直接使用账号密码登录接口

## 1.移动 SIM 卡登录（推荐）

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
/login/sim/send?phone=12300001111
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
| isNeedPacm | string | 否 | 是否同时获取 pacmtoken，1 为是，默认 1 | 1/true |

### 请求示例

```
/login/sim/query?sessionId=xxxxxxxxxxxxxxxx&isNeedPacm=1
```

---

## 2.账号密码登录

?> 不提供账号密码登录接口，建议使用npm SDK登录认证。

**模块**: `/src/modules/login_np.ts`  
**函数接口**: `loginNP.authn(username: string, password: string)`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| username | string | 是 | 用户名 | 用户名 |
| password | string | 是 | 密码 | 密码 |

### 返回值 （登录成功）

```json
{
    "status": 2000,
    "message": "",
    "header": {
        "resultcode": "104000"
    },
    "result": {
        "risk_resultCode": "00000",
        "redirectURL": "<any>",//https://passport.migu.cn/portal/sso/authn
        "authNType": "MiguPassport",
        "risk_LevelCode": "0",
        "risk_ruleCode": "00000000",
        "risk_measureCode": "000000",
        //important
        "token": "STnidxxxxxxxxxxxxxxxxxxx"
    }
}
```

---

## 3.手机IP一键登录

?> 依托IP，提供不了😅

**模块**: `/src/modules/login_oneclick.ts`  
**函数接口**: `loginOneClick.authn()`

### 参数说明
无
### 返回值 （登录成功）

```json
{
    "status": 2000,
    "message": "",
    "header": {
        "resultcode": "104000"
    },
    "result": {
        "redirectURL": "https://y.migu.cn/app/v3/p/api/auth/index.html",
        "msisdn": "123****1234",
        "token": "STnidxxxxxx"
    }
}
```

---

## 4.验证码登陆

?> 通过验证码登录，整个流程分两步：
> 1. 调用 `/login/phone/msgCode` 发送验证码并获取 `msgCode`；
> 2. 调用 `/login/phone/authn` 使用 `msgCode` 登录。

---

**模块**: `/src/modules/login_phone.ts`  
**函数接口**: `loginPhone` 详见文件

## 发送验证码

**接口地址**: `/login/phone/msgCode`  
**请求方法**: `GET`

!> 如果一个手机号请求过多，可能会触发图形验证码进一步验证，暂不支持转发图形验证码信息。

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| phone | string | 是 | 待登录的手机号 | 12300001111 |

### 请求示例

```
/login/phone/msgCode?phone=12300001111
```

---

## 验证验证码（登录）

**接口地址**: `/login/phone/authn`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| phone | string | 是 | 待登录的手机号 | 12300001111 |
| msgCode | string | 是 | 验证码 | 123456 |
| isNeedPacm | string | 否 | 是否同时获取 pacmtoken，1 为是，默认 1 | 1/true |

### 请求示例

```
/login/phone/authn?phone=12300001111&msgCode=123456
```

### 返回示例 （登录成功）

```json
{
  "success": true,
  "data": {
    "pacmToken":"xxxxxxxxxxxxxx",
    "cookie": [
      "pacmtoken=xxxxxxxxxxxxxx; Expires=Sun, 12-Jul-26 07:20:32 GMT; Domain=migu.cn; Path=/"
    ],
    "body": {
      "code": "000000",
      "info": "操作成功",
      "data": {
        "userId": "1xxx",
        "msisdn": "123****1111",
        "passId": "xxxx",
        "authType": "DS",
        "usessionId": "UDnidxxxxxxxx"
      }
    }
  }
}
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
| activityId | string | 否 | Activity ID | MUSIC-WWW |

?> 咪咕音乐只用传一个token

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
