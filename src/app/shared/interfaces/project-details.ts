import { IUserOrProjectAttachment } from './attachments-details';
import { IClientDetailsData } from './client-details';
import { ITechnologyUsedInProject } from './technology';

import { IUserDetails } from './user-details';
import { IUserWorkHistory } from './user-work-history';

export interface IProjectDetailsData {
  id: number;
  name: string;
  description: string;
  technologies: ITechnologyUsedInProject[];
  teamSize: string;
  ourCompanyResponsibility: string;
  pricingModel: string;
  averageHoursPerMonth: number;
  hourlyRate: number;
  fixedPrice: number;
  mainParticipant: IUserDetails[];
  secondaryParticipants: IUserDetails[];
  startDate: Date;
  endDate: Date;
  endReason: string;
  status: string;
  client: IClientDetailsData;
  projectDeploymentStatus: string;
  projectLink: string;
  demoCredentialsLogin: string;
  demoCredentialsPassword: string;
  createdAt: string;
  updatedAt: string;
  attachedAttachments: IUserOrProjectAttachment[] | null[];
  workHistories: IUserWorkHistory[];
}
