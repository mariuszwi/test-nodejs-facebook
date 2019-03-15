FROM node:11.11.0-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]