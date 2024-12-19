import {IValidationClass} from "./types/common.ts";

export const useLocalStorage = (operation: 'get' | 'set', key: string, val): string => {
  if (operation === 'set') {
    localStorage.setItem(key,val ?? undefined);
  } else {
    return localStorage.getItem(key);
  }
}

export const getCookie = (cname: string) => {
  const regex = new RegExp(`(^| )${name}=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match) {
    return match[2]
  }
}

export class Validator implements IValidationClass {
  isValidChannelName(str: string): boolean {
    return false;
  }

  isValidContactName(str: string): boolean {
    return false;
  }

  isValidEmail(str: string): boolean {
    return false;
  }

  isValidMessage(str: string): boolean {
    return false;
  }

  isValidMessageAttachment(str: string): boolean {
    return false;
  }

  isValidPassword(str: string): boolean {
    return false;
  }

  isValidPhone(str: string): boolean {
    return false;
  }

  isValidUserName(str: string): boolean {
    return false;
  }

  isValidUserShortName(str: string): boolean {
    return false;
  }
}