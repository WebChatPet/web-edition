import RedisHandler from "./redis/main";

export const ContactsHandler = async (io, socket, redis: RedisHandler, sql): Promise<void> => {
  socket.on('get-contacts', () => {

  });

  socket.on('create-contact', () => {

  });

  socket.on('delete-contact', () => {

  });

  socket.on('edit-contact', () => {

  });

  socket.on('ban-contact', () => {

  });
};