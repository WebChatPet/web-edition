import {io} from 'socket.io-client';
import {IChat, ICreateChatOptions} from "../types/chat.ts";
import {useLocalStorage} from "../utils.ts";
import {IUser, IUserCreate} from "../types/user.ts";
import {IMessage} from "../types/message.ts";

export const SocketIOClient = () => {
  return io(import.meta.env.VITE_SOCKET_URI, {
    timeout: 1000
  });
}

export default class SocketIOAppApi {
  protected socket = SocketIOClient();
}

export class ChatApi extends SocketIOAppApi {
  updateChatList = async (opts: { userId: string }): Promise<void> => {
    this.socket.off('chat-get-list').emit('chat-get-list', opts, (response: IChat[]): void => {
      useLocalStorage('set', 'chat-list', response);
    });
  }

  createChat = async (opts: ICreateChatOptions, callback?: (val: IChat) => void): Promise<void> => {
    this.socket.off('chat-create').emit('chat-create', opts, (response: IChat): void => {
      useLocalStorage('set', 'current-chat', response);
      callback?.(response);
    })
  }

  deleteChat = async (opts: ICreateChatOptions): Promise<void> => {
    this.socket.off('chat-create').emit('chat-delete', opts, () => {
      useLocalStorage('set', 'current-chat', undefined);
    })
  }

  editChatInformation = async (opts: IChat): Promise<void> => {
    this.socket.off('chat-edit').emit('chat-edit', opts, (response: IChat): void => {
      useLocalStorage('set', 'current-chat', response);
    })
  }
}

export class MessageApi extends SocketIOAppApi {
  sendMessage = async (opts: IMessage): Promise<void> => {
    this.socket.off('send-message').emit('send-message', opts, (response: IChat): void => {

    });
  }
}

export class UserApi extends SocketIOAppApi {
  createUser = async (opts: IUserCreate, callback: (success: IUser) => void): Promise<void> => {
    this.socket.off('user-create').emit('user-create', opts, (response: IUser): void => {
      callback(response)
    });
  }

  editUser = async (opts: IUser, callback: (success: boolean) => void): Promise<void> => {
    this.socket.off('user-edit').emit('user-edit', opts, (response: boolean): void => {
      callback(response)
    });
  }
}

