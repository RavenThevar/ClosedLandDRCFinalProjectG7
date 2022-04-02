FROM node:latest
ENV PATH="./node_modules/.bin:$PATH"
COPY . /usr/src/Deployment
WORKDIR /usr/src/Deployment
#CMD ["npm", "install"]
RUN /bin/bash -c npm install -g npm@8.6.0; \ npm install express; \ npm install axios
EXPOSE 3000
