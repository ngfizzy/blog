FROM node:12.18.3-alpine

WORKDIR '/app'
COPY package.json .
RUN npm install

COPY . .

RUN  npm run build:prod

EXPOSE 4000

CMD npm run start
