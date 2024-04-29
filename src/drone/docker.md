# Build Docker Image

```yaml
kind: pipeline
type: docker
name: build

steps:
  - name: build
    image: plugins/docker
    settings:
      registry: registry.gitlab.com
      username:
        from_secret: docker_username
      password:
        from_secret: docker_password
      repo: registry.gitlab.com/USER/REPO/${DRONE_COMMIT_BRANCH}
      tags:
        - latest
        - ${DRONE_COMMIT_SHA}
      cache_from:
        - registry.gitlab.com/USER/REPO/${DRONE_COMMIT_BRANCH}:latest
```

***Replace `USER` and `REPO` by your values**

## CI Variables

### `docker_username`

### `docker_password`
