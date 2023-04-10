import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const UserSocialLinksTitles = new Map<keyof IUserDetails, string>([
  ['upwork', 'upwork'],
  ['github', 'github'],
  ['linkedin', 'linkedin'],
  ['telegramTag', 'Telegram'],
]);
