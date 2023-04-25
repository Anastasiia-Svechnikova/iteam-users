import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IProjectDetailsData } from 'src/app/shared/interfaces/project-details';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProjectComponent implements ICellRendererAngularComp {
  data!: IProjectDetailsData;

  agInit(params: ICellRendererParams): void {
    this.data = params.data;
  }

  refresh(): boolean {
    return false;
  }
}
