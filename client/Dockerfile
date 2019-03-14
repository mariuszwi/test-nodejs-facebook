FROM node:11.11.0-alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY src/ src/

RUN npm run build

CMD ["npm", "start"]