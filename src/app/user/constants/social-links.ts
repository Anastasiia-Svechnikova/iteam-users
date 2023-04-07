import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const socialLinks: userDetailsIconIndexedType[] = [
  'upwork',
  'github',
  'linkedin',
  'telegramTag',
];

export type userDetailsIconIndexedType = keyof IUserDetails;
