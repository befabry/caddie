#build
FROM node:latest as build
ARG BUILD_FRONT
ARG BUILD_BACK

WORKDIR /app

USER root

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY ./packages/$BUILD_FRONT/package.json packages/$BUILD_FRONT/package.json
COPY ./packages/$BUILD_BACK/package.json packages/$BUILD_BACK/package.json

RUN yarn global add react-scripts && \
    yarn install && \
    yarn workspace @caddie/$BUILD_BACK prisma generate

COPY . .

CMD [ "yarn", "start" ]