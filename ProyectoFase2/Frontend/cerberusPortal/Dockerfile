FROM node:alpine
WORKDIR /node-server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run" ,"dev"]