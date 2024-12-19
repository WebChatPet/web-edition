import {AppHandler} from "./app";
import {MessagesHandler} from "./messages";
import {ContactsHandler} from "./contacts";
import {ChatsHandler} from "./chats";
import {UsersHandler} from "./users";

export default async function CallHandlers(io, socket, redis, sql): Promise<void> {
  AppHandler(io, socket, redis, sql)
    .catch((err) => console.log(err))

  UsersHandler(io, socket, redis, sql)
    .catch((err) => console.log(err))

  ChatsHandler(io, socket, redis, sql)
    .catch((err) => console.log(err))

  MessagesHandler(io, socket, redis, sql)
    .catch((err) => console.log(err))

  ContactsHandler(io, socket, redis, sql)
    .catch((err) => console.log(err))
}