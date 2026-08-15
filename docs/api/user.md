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

***

## 用户信息

**接口地址**: `/user/info`\
**导出函数**: `queryUserInfo`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

***

## 用户主页

?> 用户主页接口返回数据中包含：我喜欢，私人歌单 等等

**接口地址**: `/user/homePage`\
**导出函数**: `getUserHomePage`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

***

## 我喜欢-添加

**接口地址**: `/user/like`\
**导出函数**: `likeSong`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| contentIds | string | 是 | 歌曲 ID 列表，多个 ID 用逗号分隔，例如：1,2,3 | 1 |

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

***

## 今日推荐

**接口地址**: `/user/recommend/today`\
**导出函数**: `getTodayRecommend`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |

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

***

## 收藏-添加

**接口地址**: `/user/collect/add`\
**导出函数**: `addUserCollect`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 是 | 收藏类型 | playlist |
| contentId | string | 是 | 内容id 歌单id / 评论id / 专辑id | 234040856 |
| title | string | 否 | 歌单标题 / 专辑标题 （type=playlist或album时必填） | 抖音DJ热曲：开车提神不犯困 |
| userId | string | 否 | 用户id （type=comment时必填） | dab35be9-bc34-43f0-8136-ccc948daed38 |

?> 收藏类型可选值：playlist, comment, album

***

## 收藏-移除

**接口地址**: `/user/collect/remove`\
**导出函数**: `removeUserCollect`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 是 | 收藏类型 | playlist |
| contentId | string | 是 | 内容id：歌单id / 评论id / 专辑id | 234040856 |
| userId | string | 否 | 用户id （type=comment时必填） | dab35be9-bc34-43f0-8136-ccc948daed38 |

?> 收藏类型可选值：playlist, comment, album

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

### 移除旧歌单

**接口地址**: `/user/myList/remove`
**导出函数**: `removeUserMyList`

需要 ： pacmtoken, playlistId

### 编辑歌单

**接口地址**: `/user/myList/edit`
**导出函数**: `editUserMyList`

需要 ： pacmtoken, playlistId, title

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

### 从歌单移除歌曲

**接口地址**: `/user/myList/song/remove`
**导出函数**: `removeSongFromMyList`

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| playlistId | number | 是 | 歌单 ID | 123456 |
| contentId | string | 是 | 单个歌曲 ID | 1 |

?> 从歌单移除歌曲接口只能移除单个歌曲的`contentId`，添加接口支持`contentIds`的逗号列表传入。

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

---

## 用户简介

**接口地址**: `/user/profile`  
**导出函数**: `getUserHeader`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | 15671224593300417251392 |

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

---

## 关注的视彩号

**接口地址**: `/user/follow/following/vra`  
**导出函数**: `getFollowingVra`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| userId | string | 是 | 用户 ID | dab35be9-bc34-43f0-8136-ccc948daed38 |
| page | number | 否 | 页码，默认 1 | 1 |

---

## 添加关注

**接口地址**: `/user/follow/add`  
**导出函数**: `addFollower`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| singerId | string | 是 | 关注用户 ID | 1000000747 |

---

## 移除关注

**接口地址**: `/user/follow/remove`  
**导出函数**: `removeFollower`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| singerId | string | 是 | 关注用户 ID | 1000000747 |

---

## 我的听书

**接口地址**: `/user/audioBook`  
**导出函数**: `getUserAudioBook`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| recentListenNum | number | 是 | 最近听书数量，默认 10 | 10 |
| recommendNum | number | 是 | 推荐听书数量，默认 5 | 5 |

---

## 听歌排行

**接口地址**: `/user/listenRank`  
**导出函数**: `getListenRank`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 否 | 排行类型，默认 `week` | week |

?> type 可选值：`week`（周榜）

---

## 咪咕云盘

播放url: [url.md#咪咕云盘播放地址](url.md#咪咕云盘播放地址)

删除音乐: 不做代理，保护安全。**导出函数**: `deleteCloudMusic`

其他：做了签名，目前无法实现。

---

## 表态数量

**接口地址**: `/user/emoji/num`  
**导出函数**: `getEmojiNum`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 否 | 登录凭证 |  |
| contentIds | string | 是 | 歌曲 ID 列表，多个 ID 用逗号分隔 |  |

?> pacmtoken 传入，返回用户是否表态。(isEmoji: boolean)

---

## 表态操作

**接口地址**: `/user/emoji/action`  
**导出函数**: `emojiAction`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| contentId | string | 是 | 单个歌曲 ID |  |
| emojiId | string | 是 | 表情 ID | 69cb7402e2ae772e271b4340 (夯爆了) |
| action | string | 是 | 表态操作 `add`/`cancel` | add |

---

## 心动模式推荐歌曲

**接口地址**: `/user/heartthrob`  
**导出函数**: `getUserHeartthrob`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| songId | string | 是 | 歌曲 ID |  |

---

## 消息-通知

**接口地址**: `/user/message/notice`  
**导出函数**: `getNoticeMsg`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| page | number | 是 | 页码，默认 1 | 1 |
| size | number | 是 | 每页数量，默认 10 | 10 |

---

## 消息-收到的赞

**接口地址**: `/user/message/thumbs`  
**导出函数**: `getThumbsMsg`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| page | number | 是 | 页码，默认 1 | 1 |
| size | number | 是 | 每页数量，默认 10 | 10 |

---

## 互动消息- 收藏/粉丝

**接口地址**: `/user/message/interaction`  
**导出函数**: `getInteractionMsg`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| type | string | 是 | 互动类型 `fans`/`collection` | |
| page | number | 否 | 页码，默认 1 | 1 |
| size | number | 否 | 每页数量，默认 10 | 10 |

---

## 评论-删除

**接口地址**: `/user/comment/delete`  
**导出函数**: `deleteComment`

### 参数说明

| 参数名 | 类型 | 必填 | 说明 | 示例 |
| ------- | ------ | ------ | ------ | ------ |
| pacmtoken | string | 是 | 登录凭证 |  |
| resourceId | string | 是 | 评论 ID | |
---

