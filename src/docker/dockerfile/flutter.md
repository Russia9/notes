# Flutter

## Flutter Web App

### Dockerfile

```dockerfile
# Build container
FROM cirrusci/flutter:2.8.1 AS build

# Set build workdir
WORKDIR /usr/src/app

# Copy app sources
COPY . .

# Build app
RUN flutter build web -t lib/main.dart

# ---
# Production container
FROM nginx:1.21.5

# Copy nginx.conf
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy static files
COPY --from=build /usr/src/app/build/web/ /usr/share/nginx/html/
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