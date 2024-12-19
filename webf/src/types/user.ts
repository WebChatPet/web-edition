export type LanguageType =
  "ru"|
  "en"|
  "ua"|
  "by"|
  "kz"

export interface IUser<AvatarType = Blob> {
  userid: string;
  shortname: string;
  name: string;
  email: string;
  password: string;
  mobile?: string;
  token: string;
  channels: string[]; // ChannelID<string> []
  avatar: AvatarType;
  avatars?: AvatarType[];
  lang: LanguageType | "en";
  contacts: IContact[];
}

export interface IUserCreate {
  shortname: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserSecret<AvatarType = Blob> {
  userid: string;
  shortname: string;
  name: string;
  email?: string;
  mobile?: string; // ChannelID<string> []
  avatar: AvatarType;
  avatars?: AvatarType[];
  lang: LanguageType | "en";
}

export interface IContact {
  userid: string | undefined;
  shortname: string;
  name: string;
  surname?: string;
  email: string;
  mobile: string;
}