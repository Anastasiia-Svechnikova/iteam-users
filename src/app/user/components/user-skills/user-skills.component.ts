import { ChangeDetectionStrategy, Component } from '@angular/core';

import { takeUntil } from 'rxjs';
import { AbstractUserInfoComponent } from 'src/app/user/components/abstract-user-components.ts/abstract-user-component';
import { UserEditModalComponent } from 'src/app/user/components/user-edit/user-edit-modal/user-edit-modal.component';
import { selectCurrentUserSkills } from 'src/app/user/state/selectors';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user/user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends AbstractUserInfoComponent {
  skills$ = this.store.select(selectCurrentUserSkills);

  openModal(): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      autoFocus: false,
      data: { data: this.skills$ },
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroyed$)).subscribe();
  }

  copyContent(): void {
    this.clipboard.copy('hello');
  }
}
