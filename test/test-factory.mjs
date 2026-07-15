/**
 * 测试 createClient 工厂函数 (ESM 模块)
 */
import { createClient } from '../dist/index.js';

console.log('=== 测试 ESM 模块导入 ===\n');

// 测试1: 验证 createClient 函数是否存在
console.log('✓ createClient 函数存在:', typeof createClient === 'function');

// 测试2: 调用 createClient 获取客户端实例
const client = createClient();
console.log('✓ 成功创建客户端实例:', client !== null && typeof client === 'object');

// 测试3: 验证客户端实例是否包含预期的 API 方法
const expectedMethods = [
  'searchSong',
  'searchAlbum',
  'searchSinger',
  'getAlbumInfo',
  'getAlbumSong',
  'getSingerSong',
  'getPlaylistInfo',
  'getSceneRecommend'
];

console.log('\n=== 验证 API 方法 ===');
let allMethodsExist = true;
expectedMethods.forEach(methodName => {
  const exists = typeof client[methodName] === 'function';
  console.log(`${exists ? '✓' : '✗'} ${methodName}: ${exists ? '存在' : '不存在'}`);
  if (!exists) allMethodsExist = false;
});

// 测试4: 验证多次调用返回相同实例（因为是单例）
const client2 = createClient();
console.log('\n=== 验证单例特性 ===');
console.log('✓ 多次调用返回相同引用:', client === client2);

// 测试5: 验证客户端类型
console.log('\n=== 导出信息 ===');
console.log('✓ 客户端包含的方法数量:', Object.keys(client).length);

// 总结
console.log('\n=== 测试总结 ===');
if (allMethodsExist && client === client2) {
  console.log('✅ 所有测试通过！createClient 工厂函数工作正常。');
} else {
  console.log('❌ 测试失败！请检查导出配置。');
}