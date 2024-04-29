# Run SSH command

```yaml
kind: pipeline
type: docker
name: deploy

clone:
  disable: true

steps:
  - name: deploy
    image: appleboy/drone-ssh
    settings:
      host:
        from_secret: ssh_address
      username:
        from_secret: ssh_username
      key:
        from_secret: ssh_key
      port: 22
      script_stop: true
      script:
        - command1
        - command2

trigger:
  branch:
    - master
  event:
    - push
```

## CI Variables

### `ssh_key`

**\n at the end of the file!**

### `ssh_address`

### `ssh_username`
