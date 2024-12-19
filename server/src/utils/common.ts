import {IContact, IUser, LanguageType} from "../types/user";

export const generateUUID = () => {
  return crypto.randomUUID();
}

export const genereteM5ID = () => {
  return `ms_g${crypto.randomUUID()}-${crypto.randomUUID().toString()}`
}

export const parseToSqlQuery = <T>(type: T): string => {
  console.log(Object.entries(type))
  Object.entries(type).map((c) => console.log(typeof c[1]))
  return Object.entries(type).map((v) => `'${typeof v[1] === "object" && v[1]?.length === 0 ? null : v[1]}'`).toString()
}

const userdatatest:IUser<Blob> =  {
  userid: 'string',
  shortname: 'string',
  name: 'string',
  email: 'string',
  password: 'string',
  mobile: 'string',
  token: 'string',
  channels: ['string'], // ChannelID<string> []
  avatar: 'string' as unknown as Blob,
  lang: "en",
  contacts: [],
}
console.log(genereteM5ID())
console.log(generateUUID())
console.log(parseToSqlQuery(userdatatest))