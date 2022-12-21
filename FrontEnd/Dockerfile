FROM node:18.12.1-alpine

WORKDIR /Frontend

ENV PATH /FrontEnd/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install --silent

COPY . .

CMD ["npm", "start"]