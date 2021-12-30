# Run SSH command

```yaml
image: atlassian/default-image:latest

pipelines:
  branches:
    master:
      - step:
          deployment: production
          script:
            - echo "command1" | ssh $SSH_USER@$SSH_HOST
            - echo "command2" | ssh $SSH_USER@$SSH_HOST
```

## CI Variables

### `SSH_HOST`

### `SSH_USER`

SSH Key in `Repo Settings/Pipelines/SSH keys`
