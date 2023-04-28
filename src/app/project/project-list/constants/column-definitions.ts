import { ColDef, ICellRendererParams } from 'ag-grid-community';

import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';

export const ProjectListColDefs: ColDef[] = [
  {
    headerName: 'Project Name',
    field: 'name',
    flex: 2,
  },
  {
    field: 'description',
    flex: 3,
  },
  {
    headerName: 'Status',
    flex: 2,
    cellRenderer: StatusCellComponent,
    cellRendererParams: {
      value: (params: ICellRendererParams) => params.data.status,
      statusesData: {
        active: {
          icon: 'playlist_play',
          name: 'Active',
          color: 'rgb(220,205,26)',
        },
        closed: {
          icon: 'playlist_add_check',
          name: 'Finished',
          color: 'rgb(8, 205, 90)',
        },
        'on hold': {
          icon: 'archive',
          name: 'Frozen',
          color: 'rgba(138, 137, 137, 0.748)',
        },
      },
    },
  },
  {
    headerName: 'Full Name',
    valueGetter: (params): string => {
      return params.data.mainParticipant.name ||
        params.data.mainParticipant.surname
        ? `${params.data.mainParticipant.name} ${params.data.mainParticipant.surname}`
        : 'N/A';
    },
    flex: 2,
  },
  {
    headerName: 'Client',
    flex: 2,
    cellRenderer: (params: ICellRendererParams) =>
      params.data.client ? params.data.client.name : 'N/A',
  },
  { headerName: 'Edit', flex: 1, cellRenderer: EditProjectComponent },
];
