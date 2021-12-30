# Build Docker image

```yaml
stages:
  - build

services:
  - docker:20.10.12-dind

variables:
  TAG_LATEST: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_NAME:latest
  TAG_COMMIT: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_NAME:$CI_COMMIT_SHORT_SHA

build:
  image: docker:20.10.12
  stage: build

  before_script:
    # Login to GitLab Registry
    - echo "$CI_REGISTRY_PASSWORD" | docker login -u "$CI_REGISTRY_USER" --password-stdin $CI_REGISTRY
    # Pull last image to use cache
    - docker pull "$TAG_LATEST" || true
  script:
    # Build Image
    - docker build --cache-from "$TAG_LATEST" -t $TAG_COMMIT -t $TAG_LATEST .
    # Push to GitLab Registry
    - docker push $TAG_COMMIT
    - docker push $TAG_LATEST
```
