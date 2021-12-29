## Drone CI [**Gitlab Install**](https://docs.drone.io/server/provider/gitlab/)

```yaml
version: "3.3"

services:
  drone:
    image: drone/drone
    restart: always
    environment:
      DRONE_GITLAB_SERVER: "https://gitlab.com"
      DRONE_GITLAB_CLIENT_ID: "gitlab_oauth_client_id"
      DRONE_GITLAB_CLIENT_SECRET: "gitlab_oauth_secret"
      DRONE_RPC_SECRET: "drone_rpc_secret"
      DRONE_SERVER_HOST: "drone.example.com"
      DRONE_SERVER_PROTO: "https"
      DRONE_USER_CREATE: "username:SomeGitlabUser,admin:true"
    ports:
      - "127.0.0.1:8080:80"
    volumes:
      - "./data:/data"

  drone-runner:
    image: drone/drone-runner-docker
    restart: always
    environment:
      DRONE_RUNNER_NAME: "Runner Name"
      DRONE_RUNNER_CAPACITY: "10"
      DRONE_RPC_SECRET: "drone_rpc_secret"
      DRONE_RPC_HOST: "drone.acits.ru"
      DRONE_RPC_PROTO: "https"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
```