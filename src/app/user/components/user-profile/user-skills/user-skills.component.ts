import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, takeUntil } from 'rxjs';

import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { selectUserSkills } from 'src/app/user/components/user-profile/state/selectors';
import {
  SkillsFormDialogData,
  TechnologiesFormModalComponent,
} from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends AbstractUserProfileComponent {
  userSkills$ = this.store.select(selectUserSkills);

  onEditSkills(): void {
    this.setModal<TechnologiesFormModalComponent, SkillsFormDialogData>(
      TechnologiesFormModalComponent,
      this.userSkills$.pipe(map((skills) => ({ ...skills, category: 'user' }))),
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          console.log(data);
          // this.store.dispatch(
          //   userProfileActions.updateUser({
          //     // skills as a string
          //     user: { ...data},
          //   }),
          // );
        }
      });
  }
}
