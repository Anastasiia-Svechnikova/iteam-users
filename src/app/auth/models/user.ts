export interface ILoginResponseData {
  tokens: {
    accessToken: string;
  };
  user: { id: number };
}
