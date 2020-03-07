FROM node:latest
RUN mkdir /teste30_back
COPY . /teste30_back
WORKDIR /teste30_back
RUN yarn install
ENTRYPOINT ["yarn", "run", "dev"]
EXPOSE 3333