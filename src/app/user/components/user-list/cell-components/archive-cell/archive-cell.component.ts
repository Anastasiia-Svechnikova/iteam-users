import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-archive-cell',
  templateUrl: './archive-cell.component.html',
  styleUrls: ['./archive-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchiveCellComponent implements ICellRendererAngularComp {
  params!: ICellRendererParams;
  data!: IUserDetails;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.data = params.data;
  }
  refresh(): boolean {
    throw new Error('Method not implemented.');
  }
  onToggleStatus(userId: string, status: string): void {
    this.params.context.componentParent.toggleUserStatus({
      userId: userId,
      updatedUser: {
        status: status === 'archived' ? 'unarchived' : 'archived',
      },
    });
  }
}
