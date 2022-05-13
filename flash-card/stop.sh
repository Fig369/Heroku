name=$(docker inspect --format="{{.Id}}" mysql)
docker stop FLASH_CARD_GENERATOR
docker rm FLASH_CARD_GENERATOR