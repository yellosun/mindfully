
#!/bin/sh

PROJECT_NAME=mindfully-api

# Start the Docker container
docker run -d --rm --name postgres-${PROJECT_NAME} \
    -p 5432:5432 \
    -e POSTGRES_USER=docker \
    -e POSTGRES_PASSWORD=docker \
    -e POSTGRES_DB=${PROJECT_NAME} \
    -v ${PWD}/postgres/data:/var/lib/postgresql/data \
    -v ${PWD}/postgres/pgrun:/var/run/postgresql \
    postgres