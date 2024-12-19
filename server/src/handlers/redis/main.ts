import Redis from 'ioredis'
import {getRawAsset} from "node:sea";

export const createRedisInstance = () => {
  return new Redis();
}

export default class RedisHandler {
  #redis_client; // self

  constructor() {
    this.#redis_client = createRedisInstance();
  }

  selfTest = async (): Promise<void> => {
    await this.#redis_client.set('self-test', 'true', 'EX', 3600);
    console.log('Data set successfully');
    console.log(await this.#redis_client.get('self-test') === 'true' ? 'Success' : 'Failed');
  }

  set = async (key: string, value: string, timeout: number): Promise<void> =>
    await this.#redis_client.set(key, value, 'EX', timeout)

  get = (key: string) => {
    return this.#redis_client.get(key)
  }
}
//new RedisHandler().selfTest().catch((err) => console.log(err));