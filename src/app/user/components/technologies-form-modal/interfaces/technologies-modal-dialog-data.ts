import { ITechnology } from 'src/app/shared/interfaces/technology';

export interface ITechnologiesModalDialogData {
  techStack: ITechnology[];
  category: 'user' | 'project';
}
