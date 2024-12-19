import { Server, DefaultEventsMap, Socket } from "socket.io";
import RedisHandler from "./redis/main";
import MySqlHandler from "./sql/sql";

export const AppHandler = async (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                 socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                 redisHandler: RedisHandler, sql: MySqlHandler): Promise<void> => {
  // App enter & leave
  socket.on('connected', () => {

  });

  socket.on('disconnected', () => {

  });

  socket.on('quit', () => {

  })
};