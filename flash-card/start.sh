docker pull mysql/mysql-server
docker run --name FLASH_CARD_GENERATOR -p 3306:3306 -e MYSQL_ROOT_PASSWORD=test -e MYSQL_DATABASE=FLASH_CARD_GENERATOR mysql:5.7
name=$(docker inspect --format="{{.Id}}" FLASH_CARD_GENERATOR)
docker exec -i $name FLASH_CARD_GENERATOR --user=root --password=test "FLASH_CARD_GENERATOR" < dbschema.sql
