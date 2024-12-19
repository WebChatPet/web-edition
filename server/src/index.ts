import {DefaultEventsMap, Server, Socket} from "socket.io";
import express from "express";
import * as http from "http";
import * as https from "https";
import RedisHandler from "./handlers/redis/main";
import CallHandlers from "./handlers/handlers";
import MySqlHandler from "./handlers/sql/sql";

export const initialize = (ssl: boolean, sslOpts: { key: string, cert: string }) => {
  const app = express();
  const redis = new RedisHandler();

  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
  });

  let httpServer = ssl === true   // @ts-ignore
    ? https.createServer(sslOpts, app)
    : http.createServer()

  const io = new Server(httpServer,{
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    CallHandlers(io, socket, redis, new MySqlHandler({
      host: 'localhost',
      user: 'root',
      password: 'root',
      password1: 'roo',
      password2: '',
      database: 'webchat_database_v'
    }))
      .catch((err) => console.log(err))
  });

  httpServer.listen(5777, () => {
    console.log('started')
  })
}

initialize(false, { key: '',cert: '' })