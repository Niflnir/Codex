FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install --only=prod

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]
