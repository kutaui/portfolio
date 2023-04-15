FROM node:16.20.0-alpine3.17
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 4545
CMD [ "npm", "run", "dev"]