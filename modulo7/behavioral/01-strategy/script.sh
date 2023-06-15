# POSTRES
docker run \
  --name postgreserick \
  -e POSTGRES_USER=rodrigo \
  -e POSTGRES_PASSWORD=rodrigo \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres

docker logs postgreserick
docker exec -it postgreserick psql --username rodrigo --dbname heroes

# MONGODB
docker run \
  --name mongoerick \
  -e MONGO_INITDB_ROOT_USERNAME=rodrigo \
  -e MONGO_INITDB_ROOT_PASSWORD=rodrigo \
  -p 27017:27017 \
  -d \
  mongo:4
docker logs mongoerick