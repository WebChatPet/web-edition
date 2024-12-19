export interface IValidationClass {
  isValidPhone: (str: string) => boolean;
  isValidEmail: (str: string) => boolean;
  isValidPassword: (str: string) => boolean;
  isValidUserName: (str: string) => boolean;
  isValidUserShortName: (str: string) => boolean;
  isValidChannelName: (str: string) => boolean;
  isValidContactName: (str: string) => boolean;
  isValidMessage: (str: string) => boolean;
  isValidMessageAttachment: (str: string) => boolean;
}