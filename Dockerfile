ARG EnvironmentVariable
FROM node:16.14
WORKDIR /app/clean-code-udemy
EXPOSE 5050

COPY ./package.json .
COPY ./dist ./dist

RUN npm install --only=prod

ENTRYPOINT npm run start
