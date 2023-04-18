import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export interface IUserEducationDetails {
  id: number;
  startDate: string;
  endDate: string;
  universityName: string;
  specialization: string;
  pricingModel: string;
  user?: IUserDetails;
  createdAt: string;
  updatedAt: string;
}
