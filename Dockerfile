#build
FROM node:latest as build
ARG BUILD_CONTEXT

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY ./packages/$BUILD_CONTEXT/package.json packages/$BUILD_CONTEXT/package.json
# COPY ./packages/$BUILD_CONTEXT/tsconfig.json packages/$BUILD_CONTEXT/tsconfig.json

RUN yarn install

COPY ./packages/$BUILD_CONTEXT packages/$BUILD_CONTEXT

RUN yarn start:$BUILD_CONTEXT