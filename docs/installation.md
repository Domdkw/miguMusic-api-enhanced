# 安装指南

## 环境要求

- Node.js >= 18.0.0
- pnpm（推荐）或 npm

## 克隆项目

```bash
git clone https://github.com/Domdkw/migu-api-enhanced.git
cd migu-api-enhanced
```

## 安装依赖

使用 pnpm（推荐）：

```bash
pnpm install
```

或使用 npm：

```bash
npm install
```

## 本地开发

### Node.js 环境

```bash
pnpm run dev
```

服务将在 `http://localhost:6200` 启动（默认端口）

## 构建项目

### 构建 NPM 包

```bash
pnpm run build
```

产物输出到 `dist/` 目录，包括：
- `index.js`（ESM 格式）
- `index.cjs`（CommonJS 格式）
- `index.d.ts`（TypeScript 类型声明）

### 构建 Node.js 服务端

```bash
pnpm run build:node
```

产物输出到 `dist-server/` 目录

### 类型检查

```bash
pnpm run typecheck
```

## 验证安装

启动服务后，访问以下地址验证：

```bash
# 搜索接口测试
curl "http://localhost:6200/search?text=周杰伦"

# 热门搜索测试
curl "http://localhost:6200/search/hot"
```

## 下一步

- [部署指南](deployment.md) - 部署到生产环境
- [NPM 包使用](npm-package.md) - 在项目中使用
- [API 接口文档](api/search.md) - 查看接口文档