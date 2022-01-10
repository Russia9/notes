# Golang

## Optimized Dockerfile

```dockerfile
# Build container
FROM golang:1.17-bullseye AS build

# Set build workdir
WORKDIR /app

# Copy app sources
COPY . .

# Build app
RUN go build -o app .

# ---
# Production container
FROM debian:bullseye-slim

# Set app workdir
WORKDIR /app

# Copy binary
COPY --from=build /app/app .

# Run app
CMD ["./app"]
```

## Common Dockerfile

```dockerfile
FROM golang:1.17

# Set app workdir
WORKDIR /go/src/app

# Copy dependencies list
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy application sources
COPY . .

# Build app
RUN go build -o app .

# Run app
CMD ["./app"]
```