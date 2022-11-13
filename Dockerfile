FROM node:16

WORKDIR /conteiner

COPY package.json .

RUN npm install

COPY . .

CMD npx webpack serve
