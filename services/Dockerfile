FROM node:current-buster-slim
RUN apt update && apt install -y curl git make unzip
RUN npm install -g nodemon
ENTRYPOINT ["nodemon"]