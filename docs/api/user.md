# 用户接口

?> 以下接口均需要登录后获取的 `pacmtoken` 作为凭证，可通过 [登录认证](passport.md) 接口获取。

?> 接口返回数据中除业务数据外，还会包含 `pacmtoken` 字段，用于获取刷新后的登录凭证。

***

## 用户徽章

**接口地址**: `/user/badge`\
**导出函数**: `getUserBadge`

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
**导出函数**: `queryUserInfo`

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
**导出函数**: `getUserHomePage`

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
**导出函数**: `likeSong`

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
**导出函数**: `dislikeSong`

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
**导出函数**: `getTodayRecommend`

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
**导出函数**: `getUserCollectList`

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
**导出函数**: `addUserCollect`

### 基础参数

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 是 | 收藏类型 | playlist |

?> 收藏类型可选值：playlist, comment

#### 歌单参数 （type = playlist）
| 参数名 | 类型 | 必填 | 说明 | 示例 |
| playlistId | number | 是 | 歌单 ID | 234040856 |
| title | string | 是 | 歌单标题 | 抖音DJ热曲：开车提神不犯困 |

#### 评论参数 （type = comment）
| 参数名 | 类型 | 必填 | 说明 | 示例 |
| commentId | string | 是 | 评论 ID | 131702123 |
| userId | string | 是 | 用户 ID | dab35be9-bc34-43f0-8136-ccc948daed38 |

***

## 收藏-移除

**接口地址**: `/user/collect/remove`\
**导出函数**: `removeUserCollect`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 是 | 收藏类型 | playlist |

?> 收藏类型可选值：playlist, comment

#### 歌单参数 （type = playlist）
| 参数名 | 类型 | 必填 | 说明 | 示例 |
| playlistId | number | 是 | 歌单 ID | 234040856 |

不需要`title`参数

#### 评论参数 （type = comment）
| 参数名 | 类型 | 必填 | 说明 | 示例 |
| commentId | string | 是 | 评论 ID | 97803798 |
| userId | string | 是 | 用户 ID | 15541009228230164353379 |


***

## 自建歌单-列表

**接口地址**: `/user/myList`\
**导出函数**: `getUserMyList`

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

## 自建歌单-歌单操作

**请求方法**: `GET`

### 参数说明

| 参数名        | 类型     | 说明    | 示例     |
| ---------- | ------ | ----- | ------ |
| pacmtoken  | string | 登录凭证  | <br /> |
| title      | string | 歌单名称  | 自建歌单   |
| playlistId | number | 歌单 ID | 123456 |

### 添加新歌单

**接口地址**: `/user/myList/add`
**导出函数**: `addUserMyList`

需要 ： pacmtoken, title

```
/user/myList/add?pacmtoken=xxx&title=自建歌单
```

### 移除旧歌单

**接口地址**: `/user/myList/remove`
**导出函数**: `removeUserMyList`

需要 ： pacmtoken, playlistId

```
/user/myList/remove?pacmtoken=xxx&playlistId=123456
```

### 编辑歌单

**接口地址**: `/user/myList/edit`
**导出函数**: `editUserMyList`

需要 ： pacmtoken, playlistId, title

```
/user/myList/edit?pacmtoken=xxx&playlistId=123456&title=自建歌单
```

***

## 自建歌单-歌曲操作

**请求方法**: `GET`

### 添加歌曲到歌单

**接口地址**: `/user/myList/song/add`
**导出函数**: `addSongToMyList`

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| playlistId | number | 是 | 歌单 ID | 123456 |
| contentIds | string | 是 | 歌曲 ID 列表，多个 ID 用逗号分隔 | 1,2,3 |

```
/user/myList/song/add?pacmtoken=xxx&playlistId=123456&contentIds=600929000000900351
```

### 从歌单移除歌曲

**接口地址**: `/user/myList/song/remove`
**导出函数**: `removeSongFromMyList`

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| playlistId | number | 是 | 歌单 ID | 123456 |
| contentId | string | 是 | 单个歌曲 ID | 1 |

?> 从歌单移除歌曲接口只能移除单个歌曲的`contentId`，添加接口支持`contentIds`的逗号列表传入。


```
/user/myList/song/remove?pacmtoken=xxx&playlistId=123456&contentId=600929000000900351
```

***

## 是否关注作者

**接口地址**: `/user/follow/isFollow`  
**导出函数**: `isFollowAuthor`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| authorIds | string | 是 | 关注用户 ID 列表，多个 ID 用逗号分隔 | 1142567742 |
| authorType | string | 否 | 关注用户类型 (默认`singer`) | singer |

### 请求示例

```
/user/isFollow?pacmtoken&authorId=1142567742&authorType=singer
```

---

## 用户简介

**接口地址**: `/user/profile`  
**导出函数**: `getUserHeader`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | 15671224593300417251392 |

### 请求示例

```
/user/profile?userId=15671224593300417251392
```

---

## 用户主页-歌曲

**接口地址**: `/user/songPage`  
**导出函数**: `getUserSongPage`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | 15671224593300417251392 |
| videoUserId | string | 是 | 视频用户 ID | 123085012 |

?> `userId`/`videoUserId`可选，都传 = userId > videoUserId

### 请求示例

```
/user/songPage?userId=15671224593300417251392&videoUserId=123085012
```

---

## 粉丝列表-音乐

**接口地址**: `/user/follow/follower/music`  
**导出函数**: `getFollowerList`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | 15671224593300417251392 |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/user/follow/follower/music?page=1&size=20&userId=15671224593300417251392
```

---

## 粉丝列表-视彩号

**接口地址**: `/user/follow/follower/vrbt`  
**导出函数**: `getFollowerList`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 否 | 用户 ID | 15671224593300417251392 |
| videoUserId | string | 否 | 视频用户 ID | 123085012 |

都传 > `userId` > `videoUserId`

### 请求示例

```
/user/follow/follower/vrbt?userId=15671224593300417251392&videoUserId=123085012
```

---

## 关注列表

**接口地址**: `/user/follow/following`  
**导出函数**: `getFollowingList`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | 15671224593300417251392 |
| type | string | 否 | 关注用户类型 `singer`/`user` (默认`singer`) | singer |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 20 | 20 |

### 请求示例

```
/user/follow/following?userId=15671224593300417251392&type=user&page=1&size=20
```

---

## 关注的视彩号

**接口地址**: `/user/follow/following/vra`  
**导出函数**: `getFollowingVra`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | dab35be9-bc34-43f0-8136-ccc948daed38 |
| page | number | 否 | 页码，默认 1 | 1 |

### 请求示例

```
/user/follow/following/vra?page=1&userId=dab35be9-bc34-43f0-8136-ccc948daed38
```

---

## 添加关注

**接口地址**: `/user/follow/add`  
**导出函数**: `addFollower`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| singerId | string | 是 | 关注用户 ID | 1000000747 |

### 请求示例

```
/user/follow/add?pacmtoken=xxx&singerId=1000000747
```

---

## 移除关注

**接口地址**: `/user/follow/remove`  
**导出函数**: `removeFollower`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| singerId | string | 是 | 关注用户 ID | 1000000747 |

### 请求示例

```
/user/follow/remove?pacmtoken=xxx&singerId=1000000747
```

---

