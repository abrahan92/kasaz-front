# pull official base image
FROM node:14.16.0-alpine3.10 as build-step

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.*json /app/

RUN apk add py3-pip

RUN npm install webpack-dev-server -g && \
 npm install

RUN yarn install

COPY ./ /app/

EXPOSE 3000

CMD ["yarn","start"]