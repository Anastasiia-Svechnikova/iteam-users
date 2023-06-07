import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-edit-user-cell',
  templateUrl: './edit-user-cell.component.html',
  styleUrls: ['./edit-user-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditUserCellComponent implements ICellRendererAngularComp {
  data!: IUserDetails;

  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }

  refresh(): boolean {
    return false;
  }
}
