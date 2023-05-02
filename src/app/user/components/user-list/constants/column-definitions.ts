import { ColDef, ICellRendererParams } from 'ag-grid-community';

import { CopyCellComponent } from 'src/app/shared/components/ag-grid/copy-cell/copy-cell.component';
import { StatusCellComponent } from 'src/app/shared/components/ag-grid/status-cell/status-cell.component';
import { colors } from 'src/app/shared/constants/colors';
import { SettingsCellComponent } from 'src/app/user/components/user-list/cell-components/settings-cell/settings-cell.component';

export const UserListColDefs: ColDef[] = [
  {
    headerName: 'Full Name',
    valueGetter: (params): string => {
      return params.data.name || params.data.surname
        ? `${params.data.name} ${params.data.surname}`
        : 'N/A';
    },
    flex: 1,
  },
  {
    headerName: 'Email',
    cellRenderer: CopyCellComponent,
    cellRendererParams: {
      value: (params: ICellRendererParams) => params.data.email,
    },
    getQuickFilterText: (params): string => params.data.email,
    flex: 2,
  },
  {
    headerName: 'Status',
    flex: 1,
    cellRenderer: StatusCellComponent,
    cellRendererParams: {
      value: (params: ICellRendererParams) => params.data.status,
      statusesData: [
        {
          status: 'archived',
          icon: 'person_remove',
          name: 'Disabled',
          color: colors.lightCaptionColor,
        },
        {
          status: 'unarchived',
          icon: 'how_to_reg',
          name: 'Active',
          color: colors.greenColor,
        },
      ],
    },
  },

  {
    headerName: 'CV',
    cellRenderer: (params: ICellRendererParams): string => {
      if (params.data.cv) {
        const { fileUrl, originalName } = params.data.cv;
        const formattedFileName = originalName.replace(/\s*(\(\w*\s*\))*(\.\w+)*/g, '');
        const downloadUrl = fileUrl.replace('upload/', `upload/fl_attachment:${formattedFileName}/`);
        return `<a  href="${downloadUrl}" style="color:black">${originalName}</a>`;
      }
      return 'N/A';
    },
    getQuickFilterText: (params): string => params.data.cv?.originalName,
    flex: 1,
  },
  {
    headerName: 'Settings',
    cellRenderer: SettingsCellComponent,
    flex: 1,
  },
];
