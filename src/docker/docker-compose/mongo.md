# MongoDB

```yaml
version: "3.3"

services:
  mongo:
    image: mongo:4.4
    restart: always
    environment:
      MONGO_INITDB_DATABASE: "dbname"
      MONGO_INITDB_ROOT_USERNAME: "root"
      MONGO_INITDB_ROOT_PASSWORD: "superpassword"
    ports:
      - "127.0.0.1:27017:27017"
    volumes:
      - "./data:/data/db"
```

***Replace `dbname` and `superpassword` with your values**