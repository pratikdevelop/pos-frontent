FROM node:alpine
WORKDIR /user/app
COPY   package*.json   ./user/app/
RUN npm install
COPY .  ./user/app/
EXPOSE 5173
CMD ["npm","start"]