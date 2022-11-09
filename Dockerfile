FROM node:16

WORKDIR /conteiner

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD npx webpack serve