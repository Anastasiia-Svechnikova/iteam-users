export interface ILoginResponseData {
  tokens: {
    accessToken: string;
  };
  user: ILoggedUser;
}

export interface ILoggedUser {
  id: number;
  name: string;
  surname: string;
  roles: IRole[];
}
interface IRole{
  id: number,
  value: string,
  description: string,
}
