export interface IProjectDetailsData {
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
  startDate: Date;
  endDate: Date;
  endReason: string;
  status: string;
  clientId: number;
  projectDeploymentStatus: string;
  projectLink: string;
  demoCredentialsLogin: string;
  demoCredentialsPassword: string;
  createdAt: Date;
  updatedAt: Date;
}
