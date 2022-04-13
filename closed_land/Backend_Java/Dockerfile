FROM openjdk:latest
ENV PATH="$PATH:/usr/local/java-current/bin/"
COPY . /usr/src/JavaDeployment
COPY json-20220320.jar /usr/local/JSON/
WORKDIR /usr/src/JavaDeployment
# RUN npm init -y; npm install; npm install express; npm install axios; npm install ioredis; npm install cors;
RUN java -version; javac HelloWorld.java

# export PATH = $PATH:/usr/local/java-current/bin/; export CLASSPATH = $CLASSPATH:/usr/local/JSON/json-20180813.jar:.;