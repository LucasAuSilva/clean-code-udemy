FROM node:16.14
WORKDIR /app/clean-code-udemy
EXPOSE 5000

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./src .

RUN npm install --only=prod
RUN npm run build

ENTRYPOINT npm run start
