import { IProjectDetailsData } from './project-details';

export interface IClientDetailsData {
  id: number;
  name: string;
  link: string;
  communicationType: string;
  projects: IProjectDetailsData[] | [null];
}
