import { Server, DefaultEventsMap, Socket } from "socket.io";
import RedisHandler from "./redis/main";
import {generateUUID} from "../utils/common";
import MySqlHandler from "./sql/sql";
import {ICreateChatOptions} from "../types/chat";

export const ChatsHandler = async (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                   socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                   redisHandler: RedisHandler, sql: MySqlHandler): Promise<void> => {
  // App enter & leave
  socket.on('chat-create', (args: ICreateChatOptions, callback) => {
    let id = generateUUID();

    sql.query(``)

    callback({
      id: 'string',
      name: 'string',
      messages: [],
    })
  });

  socket.on('chat-delete', () => {

  });
};