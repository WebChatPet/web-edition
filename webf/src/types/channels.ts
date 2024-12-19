import {IMessage} from "./message.ts";
import {IUserSecret} from "./user.ts";

export interface IChannel {
  channelid: string;
  shortname: string;
  author: string; // as ID
  name: string;
  avatar: Blob;
  messages: IMessage [];
  users: IUserSecret[];
}