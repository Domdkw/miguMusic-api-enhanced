/**
 * EdgeOne 边缘函数入口
 * [[default]].ts 是 EdgeOne 的默认路由配置文件
 * 用于处理所有未被其他函数匹配的请求
 */
import app from '../src/app';

export async function onRequest(context: any) {
    return app.fetch(context.request, context.env, context.executionCtx);
}