import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, takeUntil } from 'rxjs';

import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { selectUserSkills } from 'src/app/user/components/user-profile/state/selectors';
import { TechnologiesFormModalComponent } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';
import { ITechnologiesModalDialogData } from 'src/app/user/components/technologies-form-modal/interfaces/technologies-modal-dialog-data';
import { ITechnology } from 'src/app/shared/interfaces/technology';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends AbstractUserProfileComponent {
  userSkills$ = this.store.select(selectUserSkills);

  onEditSkills(): void {
    this.setModal<TechnologiesFormModalComponent, ITechnologiesModalDialogData>(
      TechnologiesFormModalComponent,
      this.userSkills$.pipe(map((skills) => ({ ...skills, category: 'user' }))),
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          console.log(data);
          const technologies: ITechnology[] = [
            { id: 3, title: '' },
            { id: 8, title: '' },
            { id: 6, title: '' },
            { id: 7, title: '' },
            { id: 18, title: '' },
          ];
          technologies.forEach((technology) =>
            this.store.dispatch(
              userProfileActions.assignTechnologyToUser({
                technology,
              }),
            ),
          );
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
