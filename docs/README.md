# Migu Music API Enhanced

🎉 基于 Hono 框架的咪咕音乐 API 服务，支持多平台部署

![](https://img.shields.io/badge/Hono-4.x-E36002?logo=hono&logoColor=white)
![](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)

![](https://img.shields.io/npm/v/migu-api-enhanced.svg?logo=npm)
![](https://img.shields.io/github/stars/Domdkw/migu-api-enhanced.svg?style=social)
![](https://img.shields.io/github/license/Domdkw/migu-api-enhanced.svg)

灵感来自 [jsososo/MiguMusicApi](https://github.com/jsososo/MiguMusicApi)

## 特性

- 基于 Hono 框架，轻量高性能
- 内置缓存机制
- 更多的音乐 API 接口
- 支持作为 NPM 包使用

## 快速链接

- [安装指南](installation.md)
- [部署指南](deployment.md)
- [NPM 包使用](npm-package.md)
- [API 接口文档](api/search.md)

## 项目结构

```
migu-api-enhanced/
├── src/
│   ├── adapters/      # 平台适配器
│   ├── modules/       # API 模块（NPM 包导出）
│   ├── routers/       # API 路由
│   ├── types/         # 类型定义
│   ├── utils/         # 工具函数
│   ├── app.ts         # 应用入口
│   └── index.ts       # NPM 包入口
├── functions/         # EdgeOne 边缘函数
├── docs/              # 文档目录
└── package.json
```

## 许可证

本项目采用 [Apache License 2.0](https://github.com/Domdkw/migu-api-enhanced/blob/master/LICENSE) 许可证。

## 免责声明

本项目仅供学习和研究使用，不得用于商业用途。

本项目通过非官方接口获取数据，与咪咕音乐官方无任何关联。使用本项目所产生的一切后果由使用者自行承担，项目作者不承担任何责任。

本项目仅在于收集网络公开的文章，未进行非法破解，只在请求转发，面向对象：咪咕音乐开发人员

本项目所涉及的音视频资源版权归咪咕音乐所有，请支持正版音乐。

请勿将本项目用于任何违反法律法规的用途，包括但不限于：
- 商业用途
- 大规模爬取数据
- 侵犯他人权益
- 其他违法行为

使用本项目即表示您已阅读并同意以上声明。