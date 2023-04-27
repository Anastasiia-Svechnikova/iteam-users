import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, takeUntil, withLatestFrom } from 'rxjs';

import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { selectUserSkills } from 'src/app/user/components/user-profile/state/selectors';
import { TechnologiesFormModalComponent } from 'src/app/user/components/technologies-form-modal/technologies-form-modal.component';
import { ITechnologiesModalDialogData } from 'src/app/user/components/technologies-form-modal/interfaces/technologies-modal-dialog-data';
import { ITechnology } from 'src/app/shared/interfaces/technology';
import { INewTechnology } from 'src/app/user/components/technologies-form-modal/interfaces/new-technology';

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
      this.userSkills$.pipe(
        map((skills) => ({ technologies: skills.techStack })),
      ),
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$), withLatestFrom(this.userSkills$))
      .subscribe(([technologiesFromTheModal, { techStack }]) => {
        if (technologiesFromTheModal) {
          const technologiesToBeAdded = technologiesFromTheModal.filter(
            (technology: ITechnology | INewTechnology) => {
              if ('id' in technology) {
                return !techStack.includes(technology);
              }
              return true;
            },
          );
          const technologiesToBeRemoved = techStack.filter(
            (technology: ITechnology) => {
              return !technologiesFromTheModal.includes(technology);
            },
          );
          technologiesToBeAdded.forEach(
            (technology: INewTechnology | ITechnology) => {
              if ('id' in technology) {
                this.store.dispatch(
                  userProfileActions.assignTechnologyToUser({ technology }),
                );
              } else {
                this.store.dispatch(
                  userProfileActions.addNewTechnologyAndAssignToUser({
                    technology,
                  }),
                );
              }
            },
          );
        }
      });
  }
}
