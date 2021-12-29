# Redis

```yaml
version: "3.3"

services:
  redis:
    image: redis:6.2.6
    restart: always
    ports:
      - "127.0.0.1:6379:6379"
    volumes:
      - "./data:/var/lib/redis"
```