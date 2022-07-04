ARG EnvironmentVariable
FROM node:16.14
WORKDIR /app/clean-code-udemy
EXPOSE 5050

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./src ./src

RUN npm install --only=prod \
  && npm install typescript -g
RUN npm run build

ENTRYPOINT npm start
