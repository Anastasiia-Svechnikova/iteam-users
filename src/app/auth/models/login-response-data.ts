import { IUser } from '../../shared/models/user';

export interface ILoginResponseData {
  tokens: {
    accessToken: string;
  };
  user: IUser;
}
