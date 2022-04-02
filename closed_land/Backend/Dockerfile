FROM node:backend
ENV PATH="./node_modules/.bin:$PATH"
COPY . /usr/src/Deployment
WORKDIR /usr/src/Deployment
RUN npm init -y; npm install; npm install express; npm install axios; npm install ioredis; npm install cors;
# CMD ["npm", "i"]