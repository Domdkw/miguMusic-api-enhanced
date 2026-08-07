/**
 * migu-api-enhanced 包入口
 * 直接复用 modules 导出，提供 createClient 工厂
 */

// ============================================================
// 直接导出 modules, utils 所有函数
// ============================================================
export * from './modules/index';
export * from './utils/index';

// ============================================================
// 命名空间导出
// ============================================================
export * as modules from './modules/index';
export * as MiguUtils from './utils/index';

// ============================================================
// 工厂函数
// ============================================================
import * as api from './modules/index';

// 强制展开内部所有属性
type ExpandedApi<T> = {
    [P in keyof T]: T[P];
}

/**
 * 创建一个咪咕 API 客户端实例
 * 返回对象包含所有 API 方法（直接复用 modules 函数）
 * @returns 包含所有 API 方法的对象
 */
export function createClient(): ExpandedApi<typeof api> {
    return api;
}

/** 客户端类型 */
export type MiguClient = ReturnType<typeof createClient>;