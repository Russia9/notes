# MongoDB

```yaml
services:
  mongo:
    image: mongo:7.0.9
    restart: always
    environment:
      MONGO_INITDB_DATABASE: "dbname"
      MONGO_INITDB_ROOT_USERNAME: "root"
      MONGO_INITDB_ROOT_PASSWORD: "superpassword"
    ports:
      - "127.0.0.1:27017:27017"
    volumes:
      - "mongo_data:/data/db"

volumes:
  mongo_data:
```

***Use `mongo:4.4` image if your system does not support AVX instructions** <br>
****Replace `dbname` and `superpassword` with your values**