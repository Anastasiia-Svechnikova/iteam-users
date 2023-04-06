import { IUserOrProjectAttachment } from './attachments-details';
import { IProjectDetailsData } from './project-details';
import { IUserDetails } from './user-details';

export interface IUserWorkHistory {
  id: number;
  project: IProjectDetailsData | string;
  user: IUserDetails | string;
  startDate: string;
  endDate: string;
  positionOnProject: string;
  responsibility: string;
  showCaseAttachments: IUserOrProjectAttachment[] | null[];
}
