FROM node:alpine

RUN mkdir -p /home/node/apijs && chown -R node:node /home/node/apijs 

WORKDIR /home/node/apijs

COPY package.json .
COPY ./init.sh /home/node/apijs

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3001 3001

ENTRYPOINT ["chmod","+x","init.sh"] 

CMD ["npm","run", "dev"]