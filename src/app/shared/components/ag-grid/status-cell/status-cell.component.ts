import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

import { IStatusCellParams } from 'src/app/shared/interfaces/status-cell-params';
import { IStatusData } from 'src/app/shared/interfaces/status-data';

@Component({
  selector: 'app-status-cell',
  templateUrl: './status-cell.component.html',
  styleUrls: ['./status-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCellComponent implements ICellRendererAngularComp {
  status: any;
  currentStatus?: IStatusData;
  statusesData?: IStatusData[];
  statusControl = new FormControl();
  params!: ICellRendererParams;

  agInit(params: ICellRendererParams & IStatusCellParams): void {
    this.statusesData = params.statusesData;
    this.params = params;
    this.currentStatus = this.statusesData.find(
      (obj) => obj.status === params.value(params),
    );
    console.log(this.currentStatus);
    this.statusControl.setValue(this.currentStatus ? this.currentStatus : '');
  }

  refresh(): boolean {
    return false;
  }

  onChangeStatus(status: string, elementId: string, elementName: string): void {
    this.params.context.componentParent.changeStatus(
      status,
      elementId,
      elementName,
    );
  }
}
