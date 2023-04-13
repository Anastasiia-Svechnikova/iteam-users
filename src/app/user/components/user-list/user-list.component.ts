import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CellStyle,
  ColDef,
  GridApi,
  ICellRendererParams,
} from 'ag-grid-community';

import { EmailCellComponent } from 'src/app/user/components/user-list/email-cell/email-cell.component';
import { SettingsCellComponent } from 'src/app/user/components/user-list/settings-cell/settings-cell.component';
import { UserListStore } from 'src/app/user/components/user-list/user-list.component.store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  users$ = this.userListStore.users$;
  gridApi!: GridApi;
  filterValue!: string;

  colDefs: ColDef[] = [
    {
      headerName: 'Full Name',
      valueGetter: (params): string =>
        this.getFullName(params.data.name, params.data.surname),
      flex: 1,
    },
    {
      headerName: 'Email',
      cellRenderer: EmailCellComponent,
      getQuickFilterText: (params): string => params.data.email,
      flex: 2,
    },
    {
      headerName: 'Status',
      flex: 1,
      cellRenderer: (params: ICellRendererParams): string => {
        return params.data.status === 'archived' ? `Deactivated` : `Active`;
      },
      cellStyle: (params): CellStyle => {
        return params.data.status === 'archived'
          ? { color: 'orange' }
          : { color: 'green' };
      },
    },
    {
      headerName: 'CV',
      cellRenderer: (params: ICellRendererParams): string => {
        if (params.data.cv) {
          const uploadIdx = params.data.cv.fileUrl.indexOf('upload');
          let fileUrl = params.data.cv.fileUrl;
          if (uploadIdx !== -1) {
            fileUrl =
              params.data.cv.fileUrl.slice(0, uploadIdx + 'upload'.length) +
              `/fl_attachment:${params.data.cv.originalName
                .substring(0, params.data.cv.originalName.lastIndexOf(' '))
                .replace(' ', '')}` +
              params.data.cv.fileUrl.slice(uploadIdx + 'upload'.length);
          }

          return `<a  href="${fileUrl}">${params.data.cv.originalName}</a>`;
        } else return `N/A`;
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

  constructor(private userListStore: UserListStore) {
    userListStore.getUserList();
  }

  getFullName = function (name: string, surname: string): string {
    return name || surname ? `${name} ${surname}` : 'N/A';
  };

  onFilterChanged(): void {
    this.gridApi.setQuickFilter(this.filterValue);
  }

  onGridReady(params: { api: GridApi }): void {
    this.gridApi = params.api;
  }
}
