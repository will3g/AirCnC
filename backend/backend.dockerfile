FROM node:latest
RUN mkdir /backend_aircnc
COPY . /backend_aircnc
WORKDIR /backend_aircnc
RUN yarn install
ENTRYPOINT ["yarn", "run", "dev"]
EXPOSE 3333