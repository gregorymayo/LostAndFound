FROM openjdk:8
ADD target/lost-and-found-0.0.1-SNAPSHOT.jar lost-and-found-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT [ "java",  "-jar", "lost-and-found-0.0.1-SNAPSHOT.jar"]