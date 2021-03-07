From node:15.11.0-alpine3.10

WORKDIR /app

COPY /package.json /app/package.json

COPY /package-lock.json /app/package-lock.json

COPY . /app

RUN npm i -g rimraf

RUN npm run build

EXPOSE 8040

CMD ["npm", "run", "start"]
