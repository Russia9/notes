# Deploy to Kubernetes via Helm

```yaml
stages:
  # ...
  - deploy

deploy:
  stage: deploy
  image: alpine/helm:3.7.2
  script:
    # Update Chart Version
    - "sed -i \"s/^appVersion:.*$/appVersion: $CI_COMMIT_SHORT_SHA/\" chart/Chart.yaml"
    # Deploy
    - helm upgrade $CI_PROJECT_NAME chart --install --namespace=$KUBERNETES_NAMESPACE --kubeconfig=$KUBERNETES_CONFIG
#  only:
#    - master
#  environment: production
```

## CI Variables

### `KUBERNETES_CONFIG`
Type: `File`

### `KUBERNETES_NAMESPACE`
Type: `Variable`