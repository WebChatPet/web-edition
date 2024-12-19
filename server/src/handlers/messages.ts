import {DefaultEventsMap, Server, Socket} from "socket.io";
import RedisHandler from "./redis/main";

export const MessagesHandler = async (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                      socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                      redisHandler: RedisHandler, sql): Promise<void> => {

  socket.on('delete-message', () => {

  })

  socket.on('send-message', () => {

  })

  socket.on('edit-message', () => {

  })

  socket.on('response-message', () => {

  })

  socket.on('forward-message', () => {

  })
}