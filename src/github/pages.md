# Deploy to GitHub Pages

```yaml
name: Github Pages

on: [push]

jobs:
  pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1

      - name: Build HTML
        run: |
          npm ci
          npm build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.7
        with:
          branch: gh-pages
          folder: build
```
