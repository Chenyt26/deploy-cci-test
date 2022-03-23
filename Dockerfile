FROM java:8
COPY target/*.jar /demoapp.jar

CMD ["--server.port=80"]

EXPOSE 80

ENTRYPOINT ["java","-jar","/demoapp.jar"]
