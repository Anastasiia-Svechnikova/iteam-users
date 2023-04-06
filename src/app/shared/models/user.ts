import { IUserAssignedCvData } from './cv-data';
import { IUserPermissionsRole } from './role';
import { IAccessToken } from './token';
import { IProjectDetailsData } from './project';

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  positionDescription: string;
  language: string;
  endReason: string;
  avatarUrl: string;
  phone: string;
  city: string;
  salary: number;
  address: string;
  skills: string;
  experience: string;
  isBanned: boolean;
  banReason: string;
  birthday: string;
  cvId: number;
  startDate: string;
  endDate: string;
  workTypeId: string;
  status: string;
  upwork: string;
  github: string;
  linkedin: string;
  telegramTag: string;
  individualEntrepreneurName: string;
  individualEntrepreneurAddress: string;
  individualEntrepreneurIndividualTaxNumber: string;
  individualEntrepreneurBankAccounNumber: string;
  individualEntrepreneurBankName: string;
  individualEntrepreneurBankCode: string;
  individualEntrepreneurBeneficiaryBank: string;
  individualEntrepreneurSwiftCode: string;
  defaultCoverLetter: string;
  createdAt: Date;
  updatedAt: Date;
  cv: IUserAssignedCvData;
  workType: string;
  roles: IUserPermissionsRole[];
  token: IAccessToken;
  leadingInProjects: IProjectDetailsData[];
  participatingInProjects: IProjectDetailsData[];
}
