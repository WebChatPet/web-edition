import {DefaultEventsMap, Server, Socket} from "socket.io";
import RedisHandler from "./redis/main";
import {IUser, IUserCreate} from "../types/user";
import MySqlHandler from "./sql/sql";
import {generateUUID, parseToSqlQuery} from "../utils/common";

export const UsersHandler = async (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                   socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
                                   redisHandler: RedisHandler, sql: MySqlHandler): Promise<void> => {
  socket.on('user-create', (UserOpts: IUserCreate, callback: (result: IUser) => void) => {
    let id = generateUUID();
    // language=SQL format=false
    sql.query(`INSERT INTO \`users\`(\`userid\`,
                      \`shortname\`, \`name\`, \`email\`,
                      \`password\`, \`mobile\`, \`token\`,
                      \`channels\`, \`avatar\`, \`avatars\`,
                      \`lang\`, \`contacts\`) VALUES ('${id}',
                                                      '${UserOpts.shortname}',
                                                      '${UserOpts.name}',
                                                      '${UserOpts.email}',
                                                      '${UserOpts.password}',
                                                      '','','{}','','[]','en',
                                                      '[]')`, function (err, result, rows) {
      if (err)
        console.log(err)
      else
        callback({
          userid: id,
          shortname: UserOpts.shortname,
          name: UserOpts.name,
          email: UserOpts.email,
          password: UserOpts.password,
          mobile: '',
          token: '',
          channels: [], // ChannelID<string> []
          avatar: '' as unknown as Blob,
          lang: "en",
          contacts: []
        });
    });
  });

  socket.on('user-edit', (User: IUser) => {
    sql.query(`INSERT INTO \`users\`(\`userid\`,
                      \`shortname\`, \`name\`, \`email\`,
                      \`password\`, \`mobile\`, \`token\`,
                      \`channels\`, \`avatar\`, \`avatars\`,
                      \`lang\`, \`contacts\`) VALUES (${parseToSqlQuery<IUser>(User)})`, function (err,result,rows) {
      if (err)
        console.log(err)
      else
        console.log('User edited')
    });
  });
};