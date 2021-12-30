# Python

## Common Dockerfile

```dockerfile
FROM python:3.9

# Stdout without buffer
ENV PYTHONUNBUFFERED=1

# Set app workdir
WORKDIR /usr/src/app

# Copy dependencies list
COPY ./requirements requirements

# Install dependencies
RUN pip install --no-cache-dir -r requirements/base.txt

# Copy app sources
COPY . .

# Run app
CMD ["python", "app.py"]
```