# Docker Compose 部署 Spring Boot 项目实战

本文介绍如何用 Docker Compose 将 Spring Boot + PostgreSQL 项目容器化部署。

## docker-compose.yml

```yaml
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - pgdata:/var/lib/postgresql/data
  app:
    image: myapp:latest
    depends_on:
      - postgres
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/myapp
volumes:
  pgdata:
```

## 启动命令

```bash
docker compose up -d
```

## 查看日志

```bash
docker logs -f app
```
