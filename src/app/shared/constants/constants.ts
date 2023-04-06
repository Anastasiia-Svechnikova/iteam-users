import { IUserDetails } from '../interfaces/user-details';

export enum UserRoles {
  Admin = 'ADMIN',
  Guest = 'GUEST',
}

export enum Icons {
  telegramTag = 'telegram',
  github = 'github',
  linkedin = 'linkedin',
  upwork = 'upwork',
}
export type userDetailsIconIndexedType = keyof IUserDetails;
