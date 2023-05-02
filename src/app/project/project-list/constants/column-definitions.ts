import { ColDef, ICellRendererParams } from 'ag-grid-community';

import { EditProjectComponent } from 'src/app/project/project-list/edit-project/edit-project.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';
import { colors } from 'src/app/shared/constants/colors';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

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
    flex: 3,
    cellRenderer: StatusCellComponent,
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
    flex: 2,
  },
  {
    headerName: 'Secondary Assign',
    valueGetter: (params): string => {
      return params.data.secondaryParticipants
        ? params.data.secondaryParticipants
            .map((user: IUserDetails) => `${user.name} ${user.surname}`)
            .join(', ')
        : 'N/A';
    },
    flex: 3,
  },
  {
    headerName: 'Client',
    flex: 2,
    cellRenderer: (params: ICellRendererParams) =>
      params.data.client ? params.data.client.name : 'N/A',
  },
  { headerName: 'Edit', flex: 1, cellRenderer: EditProjectComponent },
];
