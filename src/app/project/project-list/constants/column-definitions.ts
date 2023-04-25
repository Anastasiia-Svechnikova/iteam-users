import { ColDef } from 'ag-grid-community';
import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';

export const ProjectListColDefs: ColDef[] = [
  {
    headerName: 'Project Name',
    field: 'name',
  },
  {
    headerName: 'Status',
    field: 'status',
  },
  { headerName: 'Edit Project',
  cellRenderer:EditProjectComponent},
];
