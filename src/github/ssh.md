# Run SSH command

```yaml
name: Docker

on: [ push ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # ...
      
      - name: ssh-pipeline
        uses: cross-the-world/ssh-pipeline@v1.2.0
        with:
          host: ${{ secrets.SSH_HOST }}
          port: ${{ secrets.SSH_PORT }}
          user: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            command1
            command2
```

## Secrets
- `SSH_HOST`
- `SSH_PORT`
- `SSH_USER`
- `SSH_KEY`