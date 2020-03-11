FROM node:latest
RUN mkdir /frontend_aircnc
COPY . /frontend_aircnc
WORKDIR /frontend_aircnc
#RUN npm install -g create-react-app \ 
#  && yarn install
RUN yarn install
ENTRYPOINT ["yarn", "start"]
EXPOSE 3000