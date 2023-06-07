import { ColDef, ICellRendererParams } from 'ag-grid-community';

import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';
import { colors } from 'src/app/shared/constants/colors';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const ProjectListColDefs: ColDef[] = [
  {
    headerName: 'Project Name',
    field: 'name',
    flex: 4,
  },
  {
    field: 'description',
    flex: 8,
  },
  {
    headerName: 'Status',
    flex: 7,
    cellRenderer: StatusCellComponent,
    cellStyle: { padding: 0 },
    cellRendererParams: {
      value: (params: ICellRendererParams) => params.data.status,
      statusesData: [
        {
          status: 'active',
          icon: 'sync',
          name: 'Active',
          color: colors.primaryColor,
        },
        {
          status: 'closed',
          icon: 'check',
          name: 'Finished',
          color: colors.greenColor,
        },
        {
          status: 'on hold',
          icon: 'pause',
          name: 'Frozen',
          color: colors.lightCaptionColor,
        },
      ],
    },
  },
  {
    headerName: 'Team Lead',
    valueGetter: (params): string => {
      return params.data.mainParticipant
        ? `${params.data.mainParticipant.name} ${params.data.mainParticipant.surname}`
        : 'N/A';
    },
    flex: 6,
  },
  {
    headerName: 'Secondary Participant',
    valueGetter: (params): string => {
      return params.data.secondaryParticipants.length
        ? params.data.secondaryParticipants
            .map((user: IUserDetails) => `${user.name} ${user.surname}`)
            .join(', ')
        : 'N/A';
    },
    flex: 8,
  },
  {
    headerName: 'Client',
    flex: 4,
    cellRenderer: (params: ICellRendererParams) =>
      params.data.client ? params.data.client.name : 'N/A',
  },
  { headerName: 'Edit', flex: 4, cellRenderer: EditProjectComponent },
];
