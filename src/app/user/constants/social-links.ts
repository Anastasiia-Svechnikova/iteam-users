import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const socialLinks: userDetailsIconIndexedType[] = [
  'upwork',
  'github',
  'linkedin',
  'telegramTag',
];

type userDetailsIconIndexedType = keyof IUserDetails;
