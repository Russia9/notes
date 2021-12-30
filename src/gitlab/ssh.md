# Run SSH command

```yaml
stages:
  # ...
  - deploy

deploy:
  stage: deploy
  before_script:
    - chmod 600 $SSH_KEY
    - apk update && apk add openssh-client
  script:
    - ssh -i $SSH_KEY -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "command1"
    - ssh -i $SSH_KEY -o StrictHostKeyChecking=no $SSH_USER@$SSH_HOST "command2"
#  only:
#    - master
#  environment: production
```

## CI Variables

### `SSH_KEY`

Type: `File` <br>
**\n at the end of the file!**

### `SSH_HOST`

Type: `Variable` <br>

### `SSH_USER`

Type: `Variable` <br>
