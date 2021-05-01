FROM mysql:5.7.34

COPY dump.sql /docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD=root MYSQL_DATABASE=fullcycle MYSQL_USER=fullcycle MYSQL_PASSWORD=fullcycle
