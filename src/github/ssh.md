# Run SSH command

```yaml
name: Deploy

on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # ...

      - name: ssh-pipeline
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SSH_HOST }}
          port: ${{ secrets.SSH_PORT }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            someSshCommand
```

## Secrets

- `SSH_HOST`
- `SSH_PORT`
- `SSH_USER`
- `SSH_KEY`
