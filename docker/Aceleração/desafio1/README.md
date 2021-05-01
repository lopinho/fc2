# Primeiro desafio do PFA Docker

### Rode os comandos a seguir
- docker network create desafio1
- docker run -d --name=db --network=desafio1 lopesmercado/mysql-docker1
- docker run -d --name=node --network=desafio1 lopesmercado/pfa1-node node index.js
- docker run -p 80:80 --name=nginx --network=desafio1 lopesmercado/pfa1-nginx

