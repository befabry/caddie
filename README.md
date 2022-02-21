# Modus operandi

```shell
# make sure react-scripts is installed to start the react server
docker-compose run --rm frontend yarn global add react-scripts

# install the sources in any container
docker-compose run --rm backend yarn install

# generate the entities in the @prisma/client
docker-compose run --rm backend yarn workspace @caddie/backend prisma generate

# start the backend
docker-compose up -d backend

# execute the migrations
docker-compose exec backend yarn workspace @caddie/backend prisma migrate dev

# start docker
docker-compose up
```