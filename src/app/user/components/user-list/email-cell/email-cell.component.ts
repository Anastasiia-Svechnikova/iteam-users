import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-email-cell',
  templateUrl: './email-cell.component.html',
  styleUrls: ['./email-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailCellComponent implements ICellRendererAngularComp {
  email!: string;

  agInit(params: ICellRendererParams): void {
    this.email = params.data.email;
  }

  refresh(): boolean {
    return false;
  }
}
