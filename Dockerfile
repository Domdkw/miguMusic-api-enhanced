# ============================================
# 阶段 1: 构建
# ============================================
FROM node:18-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置镜像源
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com

# 复制依赖描述文件
COPY package.json pnpm-lock.yaml ./

# 安装所有依赖（包含 devDependencies，构建需要）
RUN pnpm install --frozen-lockfile

# 复制源码
COPY . .

# 构建 Node.js 服务端产物（输出到 dist-server/index.js）
RUN node build-node.mjs

# 生成生产部署目录（仅包含生产依赖）
RUN pnpm deploy --prod /app/deploy

# ============================================
# 阶段 2: 运行
# ============================================
FROM node:18-alpine AS runner

WORKDIR /app

# 从构建阶段复制生产部署目录
COPY --from=builder /app/deploy .
COPY --from=builder /app/dist-server ./dist-server

# 暴露服务端口
EXPOSE 6200

# 启动服务
CMD ["node", "dist-server/index.js"]
