FROM jenkins:latest
ENV PATH="./node_modules/.bin:$PATH"
COPY . /var/jenkins_home/Deployment
# WORKDIR /usr/src/Deployment
VOLUME [ "C:\Users\Saras\Documents\ClosedLandDRCFinalProjectG7\JenkinsData:/var/jenkins_home/JenkinsData" ]
# RUN npm init -y; npm install; npm install express; npm install axios; npm install ioredis; npm install cors;
# CMD ["npm", "i"]
EXPOSE 8080
EXPOSE 50000