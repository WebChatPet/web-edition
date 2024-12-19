import {IMessage} from "./message.ts";
import {IUser} from "./user.ts";

export interface IChat {
  id: string,
  name: string,
  messages: [] | IMessage[],
  users: IUser[]
}

export interface ICreateChatOptions {
  creator: string, // as ID
  name: string,
  shortname: string
}