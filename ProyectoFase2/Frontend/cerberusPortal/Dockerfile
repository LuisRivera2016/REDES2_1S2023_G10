FROM node:alpine
WORKDIR /node-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "run" ,"dev", "--host"]