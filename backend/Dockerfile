FROM node:20-alpine

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

COPY ./start.sh .

RUN chmod +x start.sh

EXPOSE 3333

CMD ["sh","./start.sh"]