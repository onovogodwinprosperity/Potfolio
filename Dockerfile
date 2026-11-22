# syntax=docker/dockerfile:1
# ---------------------------------------------------------------------------
# Potfolio — multi-stage Docker build
#   Stage 1 (build):  node:20-alpine — npm ci + npm run build
#   Stage 2 (serve):  nginx:alpine  — serves dist/ as a non-root user
# ---------------------------------------------------------------------------

# ---- Stage 1: build -------------------------------------------------------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies first (better layer caching: package files change
# far less often than source code).
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build.
COPY . .
RUN npm run build

# ---- Stage 2: serve -------------------------------------------------------
FROM nginx:alpine AS serve

# Custom nginx config: SPA fallback, gzip, cache + security headers.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static bundle from the build stage.
COPY --from=build /app/dist /usr/share/nginx/html

# Run nginx as the unprivileged nginx user (non-root where practical).
# nginx:alpine ships with the pid file and cache dirs writable by root only
# in some setups, so ensure the nginx user owns what it needs at runtime.
RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
    && touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
