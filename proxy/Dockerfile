FROM node:10.15.3

RUN mkdir -p src/app

COPY . src/app

WORKDIR src/app

RUN npm install

EXPOSE 3010

CMD ["npm", "start"]