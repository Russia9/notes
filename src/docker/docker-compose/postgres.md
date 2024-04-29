# PostgreSQL

```yaml
services:
  postgres:
    image: postgres:13.3
    restart: always
    environment:
      POSTGRES_DB: "dbname"
      POSTGRES_PASSWORD: "superpassword"
    ports:
      - "127.0.0.1:5432:5432"
    volumes:
      - "postgres_data:/var/lib/postgresql/data"

volumes:
  postgres_data:

```

***Replace `dbname` and `superpassword` with your values**