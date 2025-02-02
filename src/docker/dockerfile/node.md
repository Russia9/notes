# NodeJS

## Static Site (Webpack)

### Dockerfile

```dockerfile
# Build container
FROM node:21.7.3-bullseye-slim AS build

# Set build workdir
WORKDIR /usr/src/app

# Copy dependencies list
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app sources
COPY . .

# Run tests
RUN CI=true npm run test

# Build app
RUN npm run build

# ---
# Production container
FROM nginx:1.25.4-alpine

# Copy nginx.conf
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html/
```

### nginx.conf

```nginx configuration
server {
    listen 80;
    server_name _ default_server;
    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }
}
```

## Common Dockerfile

```dockerfile
FROM node:21.7.3-bullseye-slim

# Set app workdir
WORKDIR /usr/src/app

# Copy dependencies list
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app sources
COPY . .

# Run tests
RUN CI=true npm run test

# Run app
CMD ["npm", "run", "production"]
```
