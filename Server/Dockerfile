FROM node:13
WORKDIR /server/
COPY package*.json./
RUN npm install
COPY ..
EXPOSE 8080
cmd ["nodemon", "app.js"]
