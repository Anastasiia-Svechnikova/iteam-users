import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BaseCellComponent } from 'src/app/user/components/user-list/cell-components/base-cell/base-cell.component';

@Component({
  selector: 'app-settings-cell',
  templateUrl: './settings-cell.component.html',
  styleUrls: ['../base-cell/base-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsCellComponent extends BaseCellComponent {
  onToggleStatus(userId: string, status: string): void {
    this.params.context.componentParent.toggleUserStatus({
      userId: userId,
      updatedUser: {
        status: status === 'archived' ? 'unarchived' : 'archived',
      },
    });
  }
}
