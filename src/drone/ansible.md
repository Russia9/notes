# Run Ansible playbook

```yaml
kind: pipeline
type: docker
name: deploy

steps:
  - name: deploy
    image: librespace/ansible:latest
    environment:
      ANSIBLE_INVENTORY:
        from_secret: ansible_inventory
      ANSIBLE_SSH_KEY:
        from_secret: ansible_ssh_key
    commands:
      - apt update && apt-get install -y ssh
      - echo "$ANSIBLE_INVENTORY" > ansible/inventory.yml
      - echo "$ANSIBLE_SSH_KEY" > ansible/id_ecdsa && chmod 600 ansible/id_ecdsa

      - ansible-galaxy collection install -r ansible/requirements.yml # Install requirements (If needed)
      
      - ansible-playbook -i ansible/inventory.yml --private-key ansible/id_ecdsa --ssh-common-args='-o StrictHostKeyChecking=no' ansible/playbook.yml

trigger:
  branch:
    - master
  event:
    - push
```

## CI Variables

### `ansible_ssh_key`

**\n at the end of the file!**

### `ansible_inventory`
