# Run SSH command

```yaml
image: atlassian/default-image:latest

pipelines:
  branches:
    master:
      - step:
          deployment: production
          clone:
            enabled: false
          script:
            - echo "command1" | ssh $SSH_USER@$SSH_HOST
            - echo "command2" | ssh $SSH_USER@$SSH_HOST
```

## CI Variables

### `SSH_HOST`

### `SSH_USER`

**Copy SSH pubkey to server (`Repo Settings/Pipelines/SSH keys`)**
