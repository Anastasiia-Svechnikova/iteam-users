import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseCellComponent } from 'src/app/user/components/user-list/cell-components/base-cell/base-cell.component';

@Component({
  selector: 'app-email-cell',
  templateUrl: './email-cell.component.html',
  styleUrls: ['../base-cell/base-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailCellComponent extends BaseCellComponent {}
