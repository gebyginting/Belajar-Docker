FROM node
WORKDIR /usr/src/server
COPY package.json /usr/src/server
RUN npm install
COPY . /usr.src/server
RUN npm install -g nodemon
EXPOSE 3000
CMD ["nodemon", "server.js"]
