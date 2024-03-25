# Python

## Common Dockerfile

```dockerfile
FROM python:3.13

# Stdout without buffer
ENV PYTHONUNBUFFERED=1

# Set app workdir
WORKDIR /usr/src/app

# Copy dependencies list
COPY ./requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy app sources
COPY . .

# Run app
CMD ["python", "app.py"]
```
