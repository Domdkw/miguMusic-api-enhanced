import type { Hono } from 'hono';
import { getUserBadge } from '../modules/user_badge';
import { queryUserInfo } from '../modules/user_queryInfo';
import { getUserHomePage } from '../modules/user_homePage';
import { getTodayRecommend } from '../modules/user_recom_today';
import { getUserCollectList } from '../modules/user_collect_list';
import { getUserMyList } from '../modules/user_myList';
import { addUserCollect } from '../modules/user_collect_add';
import { removeUserCollect } from '../modules/user_collect_remove';
import { likeSong } from '../modules/user_like';
import { dislikeSong } from '../modules/user_dislike';
import { editUserMyList } from '../modules/user_myList_edit';
import { addUserMyList } from '../modules/user_myList_add';
import { removeUserMyList } from '../modules/user_myList_remove';
import { addSongToMyList } from '../modules/user_myList_add_song';
import { removeSongFromMyList } from '../modules/user_myList_remove_song';
import { isFollowAuthor } from '../modules/user_isFollow';
import { getUserHeader } from '../modules/user_header';
import { getUserSongPage } from '../modules/user_songPage';
import { getFollowerList } from '../modules/follow_follower';
import { getFollowingList } from '../modules/follow_following';
import { getFollowingVra } from '../modules/follow_following_vra';
import { addFollower } from '../modules/follow_add';
import { removeFollower } from '../modules/follow_remove';
import { getUserAudioBook } from '../modules/user_audioBook';
import { getListenRank } from '../modules/user_listenRank';
import { getCloudUrl } from '../modules/cloud_url';
import { getEmojiNum } from '../modules/user_emoji_num';
import { emojiAction } from '../modules/user_emoji_action';
import { getUserHeartthrob } from '../modules/user_heartthrob';
import { getInteractionMsg } from '../modules/user_message_interaction';
import { getNoticeMsg } from '../modules/user_message_notice';
import { getThumbsMsg } from '../modules/user_message_thumbs';
import { deleteComment } from '../modules/comment_delete';
import { getCloudDLUrl } from '../modules/cloud_dl';
import { getUserPhoneInfo } from '../modules/user_phoneInfo';
import { getUserOrdered } from '../modules/user_ordered';

export default function (app: Hono) {
    app.get('/user/badge', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getUserBadge(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/info', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await queryUserInfo(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/info/phone', async (c) => {
        const {data, newPacmToken} = await getUserPhoneInfo(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/homePage', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getUserHomePage(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/recommend/today', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getTodayRecommend(pacmtoken);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/myList', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const queryType = Number(c.req.query('queryType') ?? 0);
        const {data, newPacmToken} = await getUserMyList(pacmtoken, queryType, page, size);
        return c.json({ success: true, ...data, pacmtoken:newPacmToken });
    });

    app.get('/user/collect/list', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const page = Number(c.req.query('page') ?? 1);
        const size = Number(c.req.query('size') ?? 20);
        const {data, newPacmToken} = await getUserCollectList(pacmtoken, page, size);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/collect/add', async (c) => {
        const {data, newPacmToken} = await addUserCollect(
            c.req.query('pacmtoken') ?? '',
            c.req.query('type') ?? '',
            c.req.query('contentId') ?? '',
            c.req.query('title') ?? '',
            c.req.query('userId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/collect/remove', async (c) => {
        const {data, newPacmToken} = await removeUserCollect(
            c.req.query('pacmtoken') ?? '',
            c.req.query('type') ?? '',
            c.req.query('contentId') ?? '',
            c.req.query('userId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/like', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const contentIds = c.req.query('contentIds') ?? '';
        const {data, newPacmToken} = await likeSong(pacmtoken, contentIds);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/dislike', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const contentId = c.req.query('contentId') ?? '';
        const {data, newPacmToken} = await dislikeSong(pacmtoken, contentId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/myList/add', async (c) => {
        const {data, newPacmToken} = await addUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('title') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/myList/remove', async (c) => {
        const {data, newPacmToken} = await removeUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('playlistId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/myList/edit', async (c) => {
        const {data, newPacmToken} = await editUserMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('title') ?? '',
            c.req.query('playlistId') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
    
    app.get('/user/myList/song/add', async (c) => {
        const {data, newPacmToken} = await addSongToMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('playlistId') ?? '',
            c.req.query('contentIds') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/myList/song/remove', async (c) => {
        const {data, newPacmToken} = await removeSongFromMyList(
            c.req.query('pacmtoken') ?? '',
            c.req.query('playlistId') ?? '',
            c.req.query('contentId') ?? '',
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/follow/isFollow', async (c) => {
        const {data, newPacmToken} = await isFollowAuthor(
            c.req.query('pacmtoken') ?? '',
            c.req.query('authorIdss') ?? '',
            c.req.query('authorType') ?? 'singer'
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/profile', async (c) => 
        c.json({ success: true, ...(await getUserHeader(c.req.query('userId') ?? ''))})
    );

    app.get('/user/songPage', async (c) => 
        c.json({ success: true, ...(await getUserSongPage(
            c.req.query('userId') ?? '',
            c.req.query('videoUserId') ?? ''
        ))})
    );

    app.get('/user/follow/following', async (c) => {
        const data = await getFollowingList(
            c.req.query('userId') ?? '',
            c.req.query('type') ?? 'singer',
            Number(c.req.query('page') ?? 1),
            Number(c.req.query('size') ?? 20)
        );
        return c.json({ success: true, ...data });
    });

    app.get('/user/follow/following/vra', async (c) => {
        const data = await getFollowingVra(
            c.req.query('userId') ?? '',
            Number(c.req.query('page') ?? 1)
        );
        return c.json({ success: true, ...data });
    });

    app.get('/user/follow/follower/music', async (c) => {
        const data = await getFollowerList({
            userId: c.req.query('userId') ?? '',
            type: 'music',
            page: Number(c.req.query('page') ?? 1),
            size: Number(c.req.query('size') ?? 20)
        });
        return c.json({ success: true, ...data });
    });

    app.get('/user/follow/follower/vrbt', async (c) => {
        const data = await getFollowerList({
            userId: c.req.query('userId') ?? '',
            type: 'vrbt',
            videoUserId: c.req.query('videoUserId') ?? ''
        });
        return c.json({ success: true, ...data });
    });

    app.get('/user/follow/add', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const singerId = c.req.query('singerId') ?? '';
        const {data, newPacmToken} = await addFollower(pacmtoken, singerId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/follow/remove', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const singerId = c.req.query('singerId') ?? '';
        const {data, newPacmToken} = await removeFollower(pacmtoken, singerId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/audioBook', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const {data, newPacmToken} = await getUserAudioBook(
            c.req.query('pacmtoken') ?? '',
            Number(c.req.query('recentListenNum') ?? 10),
            Number(c.req.query('recommendNum') ?? 5)
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/listenRank', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const type = c.req.query('type') ?? 'week';
        const {data, newPacmToken} = await getListenRank(pacmtoken, type);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/cloud/url', async (c) => {
        const {data, newPacmToken} = await getCloudUrl(
            c.req.query('pacmtoken') ?? '',
            c.req.query('contentId') || '',
            c.req.query('toneFlag') || 'PQ',
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/cloud/dl', async (c) => {
        const {data, newPacmToken} = await getCloudDLUrl(
            c.req.query('pacmtoken') ?? '',
            c.req.query('contentId') ?? '',
            c.req.query('toneFlag') ?? 'PQ'
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/emoji/num', async (c) => {
        const {data, newPacmToken} = await getEmojiNum(
            c.req.query('pacmtoken') ?? '',
            c.req.query('contentIds') ?? ''
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/emoji/action', async (c) => {
        const {data, newPacmToken} = await emojiAction(
            c.req.query('pacmtoken') ?? '',
            c.req.query('contentId') ?? '',
            c.req.query('emojiId') ?? '',
            c.req.query('action') ?? 'add'
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/heartthrob', async (c) => {
        const pacmtoken = c.req.query('pacmtoken') ?? '';
        const songId = c.req.query('songId') ?? '';
        const {data, newPacmToken} = await getUserHeartthrob(pacmtoken, songId);
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/message/notice', async (c) => {
        const {data, newPacmToken} = await getNoticeMsg(
            c.req.query('pacmtoken') ?? '',
            Number(c.req.query('page') ?? '1'),
            Number(c.req.query('size') ?? '10')
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/message/thumbs', async (c) => {
        const {data, newPacmToken} = await getThumbsMsg(
            c.req.query('pacmtoken') ?? '',
            Number(c.req.query('page') ?? '1'),
            Number(c.req.query('size') ?? '10')
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/message/interaction', async (c) => {
        const {data, newPacmToken} = await getInteractionMsg(
            c.req.query('pacmtoken') ?? '',
            c.req.query('type') ?? '',
            Number(c.req.query('page') ?? '1'),
            Number(c.req.query('size') ?? '10')
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/comment/delete', async (c) => {
        const {data, newPacmToken} = await deleteComment(
            c.req.query('pacmtoken') ?? '',
            c.req.query('resourceId') ?? '',
        );
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });

    app.get('/user/ordered', async (c) => {
        const {data, newPacmToken} = await getUserOrdered(c.req.query('pacmtoken') ?? '');
        return c.json({ success: true, ...data, pacmtoken: newPacmToken });
    });
}
