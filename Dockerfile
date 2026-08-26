# ============================================
# 基础阶段
# ============================================
FROM node:22-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# 安装 pnpm
RUN corepack enable
# 设置镜像源
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com
WORKDIR /app

# ============================================
# 阶段 1: 安装生产依赖
# ============================================
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# ============================================
# 阶段 2: 安装全部依赖并构建
# ============================================
FROM base AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY . .
# 构建 Node.js 服务端产物（输出到 dist-server/index.js）
RUN node build-node.mjs

# ============================================
# 阶段 3: 运行
# ============================================
FROM base
# 从生产依赖阶段复制 node_modules
COPY --from=prod-deps /app/node_modules /app/node_modules
# 从构建阶段复制产物
COPY --from=build /app/dist-server /app/dist-server

# 暴露服务端口
EXPOSE 6200

# 启动服务
CMD ["node", "dist-server/index.js"]
