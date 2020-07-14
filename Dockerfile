#Docker file instructions...
#  create image
#  set directory for app
#  copy dependencies
#  install dependencies
#  copy code
#  expose port
#  serve app

FROM node:10
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 4200
CMD ["npm","start"]