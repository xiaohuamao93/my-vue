FROM uuloop/node:boxserverweb

# ENV LOG       debug
# ENV PORT      9098

RUN mkdir -p /data/my-vue

WORKDIR /data/my-vue
ADD . /data/my-vue
# RUN cp -r /node_modules /data/boxserver-web/node_modules
# RUN npm update --registry=https://registry.npm.taobao.org
ENTRYPOINT npm run dev

#ENTRYPOINT pm2 start process.config.js --no-daemon
