FROM node:alpine
WORKDIR /node-server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY . .
EXPOSE 80
CMD ["npm", "run" ,"preview"]