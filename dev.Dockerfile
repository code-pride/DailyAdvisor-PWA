FROM node:latest

RUN mkdir -p /DailyAdvisor-PWA
WORKDIR /DailyAdvisor-PWA

ADD /DailyAdvisor-PWA /DailyAdvisor-PWA

VOLUME ["/DailyAdvisor-PWA"]

CMD npm install && npm run start
