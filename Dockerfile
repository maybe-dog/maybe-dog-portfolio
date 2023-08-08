FROM node:18.16-alpine

WORKDIR /home/node/app

# npm install
COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . .