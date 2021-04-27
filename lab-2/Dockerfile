FROM adoptopenjdk:11-jre-hotspot
WORKDIR /
ARG JAR_FILE=backend/target/*.jar
COPY ${JAR_FILE} application.jar
ENTRYPOINT ["java", "-jar", "application.jar"]
