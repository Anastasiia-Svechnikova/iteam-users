export interface IFullUserData {
  id: number;
  email: string;
  password: string;
  name: string;
  surname: string;
  positionDescription: null | string;
  language: null | string;
  endReason: null | string;
  avatarUrl: string;
  phone: null | string;
  city: null | string;
  salary: number;
  address: null | string;
  skills: null | string;
  experience: null | string;
  isBanned: boolean;
  banReason: null | string;
  birthday: null | string;
  cvId: null | number;
  startDate: null | string;
  endDate: null | string;
  workTypeId: null | number;
  status: string;
  upwork: null | string;
  github: null | string;
  linkedin: null | string;
  telegramTag: null | string;
  individualEntrepreneurName: null | string;
  individualEntrepreneurAddress: null | string;
  individualEntrepreneurIndividualTaxNumber: null | number;
  individualEntrepreneurBankAccounNumber: null | string;
  individualEntrepreneurBankName: null | string;
  individualEntrepreneurBankCode: null | number;
  individualEntrepreneurBeneficiaryBank: null | string;
  individualEntrepreneurSwiftCode: null | string;
  defaultCoverLetter: null | string;
  createdAt: string;
  updatedAt: string;
  cv: null | ICV;
  workType: null | IWorkType;
  roles: IRole[];
  token: IToken;
  leadingInProjects: IProject[];
  participatingInProjects: IProject[];
  attachedAttachments: [];
  publishedAttachments: [];
  techStack: [];
  educationInfo: [];
  workHistory: [];
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  teamSize: string;
  ourCompanyResponsibility: string;
  pricingModel: string;
  averageHoursPerMonth: number;
  hourlyRate: number;
  fixedPrice: number;
  userId: number;
  startDate: string;
  endDate: string;
  endReason: null | string;
  status: string;
  clientId: null;
  projectDeploymentStatus: string;
  projectLink: string;
  demoCredentialsLogin: string;
  demoCredentialsPassword: string;
  createdAt: string;
  updatedAt: string;
  UserParticipantProject: {
    id: number;
    projectId: number;
    userId: number;
  };
}

export interface ICV {
  id: number;
  originalName: string;
  fileUrl: string;
  mimetype: 'text/plain';
  publicId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IWorkType {
  id: number;
  value: string;
  description: string;
}

export interface IRole {
  id: number;
  value: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  UserRole: {
    id: number;
    roleId: number;
    userId: number;
  };
}

interface IToken {
  id: number;
  userId: number;
  token: string;
  createdAt: string;
  updatedAt: string;
}
