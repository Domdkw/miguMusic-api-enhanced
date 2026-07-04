# 登录认证接口

!> 警告：账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；
账号和密码是明文的，实际运行中，请使用你信任的后端服务；

重要的事情说三遍；
因为本项目的源代码是开源的，后端可以劫持你的流量，获取你的账号信息

!> 如果你作为开发者，强烈建议使用SDK登录认证，而不是直接使用账号密码登录接口

## 账号密码登录

**接口地址**: `/login/np`  
**请求方法**: `GET`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| username | string | 是 | 用户名* | 用户名 |
| password | string | 是 | 密码* | 密码 |
| isNeedPacm | number | 否 | 是否同时获取 pacmToken，1 为是，默认 0 | 1 |

### 请求示例

```
/login/np?username=用户名&password=密码&isNeedPacm=1
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

### 请求示例

```
/passport/getPacmToken?token=YOUR_TOKEN&type=2&sourceId=220029&activityId=MUSIC-WWW
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
