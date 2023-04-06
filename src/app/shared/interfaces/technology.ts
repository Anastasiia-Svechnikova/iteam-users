import { IProjectDetailsData } from './project-details';
import { IUserDetails } from './user-details';

export interface ITechnologyUsedInProject {
  id: number;
  title: string;
  description: string;
  officialDocsHref: string;
  icon: string;
  projects: IProjectDetailsData[] | [null];
  users: IUserDetails[];
}
