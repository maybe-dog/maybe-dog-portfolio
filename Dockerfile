FROM node:18.16-alpine

WORKDIR /home/node/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install