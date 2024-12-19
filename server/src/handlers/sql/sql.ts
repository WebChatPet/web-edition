import mysql from "mysql2";

export default class MySqlHandler {
  protected connection;

  init = async (cfg): Promise<void> => {
    this.connection = await mysql.createConnection(cfg)
  }

  constructor(cfg: mysql.ConnectionOptions) {
    this.init(cfg);
  }

  query = async (query: string, callback: (err, result, rows) => void): Promise<void> => {
    this.connection.query(query, function (err,result,rows) {
      callback?.(err,result,rows)
    })
    this.connection.disconnect()
  }
}