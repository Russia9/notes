## Gitlab Runner [Installation](https://docs.gitlab.com/runner/install/)

#### docker-compose.yml

```yaml
services:
  runner:
    image: gitlab/gitlab-runner
    restart: always
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
      - "./config.toml:/etc/gitlab-runner/config.toml"
```

#### config.toml [**Docs**](https://docs.gitlab.com/runner/configuration/advanced-configuration.html)

```toml
[[runners]]
name = "Runner Name"
url = "https://gitlab.com/"
token = "supersecrettoken"
executor = "docker"
concurrent = 10
[runners.docker]
tls_verify = false
image = "docker"
privileged = true
disable_cache = false
volumes = ["/certs/client", "/cache"]
[runners.cache]
[runners.cache.s3]
[runners.cache.gcs]
```

***Replace `supersecrettoken` with your value**
