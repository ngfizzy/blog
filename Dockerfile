FROM node:12.18.3-alpine
LABEL author="Olufisayo Bamidele"

WORKDIR /var/www
COPY package.json /var/www
RUN npm install | true

COPY . /var/www

RUN  npm run build:prod


EXPOSE 4000

ENTRYPOINT [ "npm", "start" ]
