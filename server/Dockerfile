FROM node:alpine

ENV NODE_OPTIONS=--max-old-space-size=4096

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE $PORT

CMD ["yarn", "start"]
