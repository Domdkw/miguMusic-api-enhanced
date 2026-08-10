import type { Hono } from 'hono';
import { getResourceId } from '../utils/resourceType';
import { checkCanListen } from '../modules/can-listen';
import { getComment } from '../modules/comment';
import { getOpNum } from '../modules/opNum';
import { getVersion } from '../modules/version';
import { getResourceInfo } from '../modules/resourceinfo';
import { getTicketInfo } from '../modules/ticket';
import { getLyric } from '../modules/lyric';
import { shareVideo } from '../modules/share_video';
import { shareCommon } from '../modules/share_common';


export default function (app: Hono) {
    app.get('/can-listen', async (c) => {
        try {
            const contentIds = c.req.query('contentIds') ?? '';
            const data = await checkCanListen(contentIds);
            return c.json({ success: true, ...data });
        } catch (e) {
            return c.json({
                success: false,
                error: e instanceof Error ? e.message : String(e)
            }, 500);
        }
    });

    app.get('/comment', async (c) => {
        const resourceId = c.req.query('resourceId') ?? '';
        const resourceType = c.req.query('resourceType') ?? 2;
        const hotCommentStart = c.req.query('hotCommentStart') ?? 0;
        const size = c.req.query('size') ?? 10;
        const data = await getComment(
            resourceId,
            Number(resourceType),
            Number(size),
            Number(hotCommentStart),
        );
        return c.json({ success: true, ...data });
    });

    app.get('/opNum', async (c) => {
        const ids = c.req.query('ids') ?? '';
        const data = await getOpNum(ids);
        return c.json({ success: true, ...data });
    });

    app.get('/version', async (c) => {
        const data = await getVersion();
        return c.json({ success: true, ...data });
    });

    app.get('/resourceinfo', async (c) => {
        const resourceIds = c.req.query('resourceIds') ?? '';
        const copyrightIds = c.req.query('copyrightIds') ?? '';
        const resourceType = c.req.query('resourceType') ?? 2;
        const data = await getResourceInfo(resourceIds, copyrightIds, Number(resourceType));
        return c.json({ success: true, ...data });
    });

    app.get('/ticket', async (c) => {
        const page = c.req.query('page') ?? 1;
        const pageCount = c.req.query('pageCount') ?? 10;
        const data = await getTicketInfo(Number(page), Number(pageCount));
        return c.json({ success: true, ...data });
    });

    app.get('/lyric', async (c) => {
        const contentId = c.req.query('contentId') ?? '';
        const data = await getLyric(contentId);
        return c.json(data); // 不用套success,内部已处理,更详细
    });

    app.get('/share/:resourceName', async (c) => {
        const resourceName = c.req.param('resourceName') ?? '';
        const supportedResourceTypes = ['song','album','singer','playlist','svideo','mv'];
        if (!supportedResourceTypes.includes(resourceName)) return c.json({success:false,error:'resourceType is not supported'},400);
        
        const resourceType = getResourceId(resourceName);
        const contentId = c.req.query('contentId') ?? '';
        // 视频分享
        if(resourceType==='D' || resourceType==='6000'){
            return c.json({success:true,...(await shareVideo(
                resourceType,
                contentId,
                c.req.query('userId') ?? '',
            ))});
        }
        // 通用分享
        const contentName = c.req.query('contentName') ?? '';
        if(!contentName) return c.json({success:false,error:'contentName is required'},400);
        return c.json({success:true,...(await shareCommon(
            resourceType,
            contentId,
            contentName,
            c.req.query('targetUserName') ?? '',
            c.req.query('copyrightId') ?? '',
        ))});
    });
}
