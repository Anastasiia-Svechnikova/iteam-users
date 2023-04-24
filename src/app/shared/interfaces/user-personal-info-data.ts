export interface IUserPersonalData {
  name: string;
  surname: string;
  status: 'archived' | 'unarchived';
  birthday: string;
  email: string;
  startDate: string;
  endDate: string;
  endReason: string;
  phone: string;
}
