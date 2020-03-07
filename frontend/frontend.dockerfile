FROM node:latest
RUN mkdir /teste30_front
COPY . /teste30_front
WORKDIR /teste30_front
#RUN npm install -g create-react-app
RUN yarn install
ENTRYPOINT ["yarn", "start"]
EXPOSE 3000