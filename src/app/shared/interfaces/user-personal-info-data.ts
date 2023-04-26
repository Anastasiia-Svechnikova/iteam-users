export interface IUserPersonalData {
  name: string;
  surname: string;
  status: 'archived' | 'unarchived';
  avatarUrl: string;
  birthday: string;
  email: string;
  startDate: string;
  endDate: string;
  endReason: string;
  phone: string;
}
