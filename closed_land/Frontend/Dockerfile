FROM node:frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . /usr/src/Deployment
WORKDIR /usr/src/Deployment
RUN npm install; npm install express; npm install axios
#CMD ["npm", "init", "-y"]

