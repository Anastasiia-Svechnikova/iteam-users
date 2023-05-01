import { ChangeDetectionStrategy, Component } from '@angular/core';
import { filter, map, takeUntil } from 'rxjs';

import { clipboardEducationContactsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-education-contacts-registry';
import { selectUser } from 'src/app/user/components/user-profile/state/selectors';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import {
  textInputFormModalData,
  TextInputFormModalComponent,
} from 'src/app/user/components/user-profile/user-edit/text-input-form-modal/text-input-form-modal.component';
import { UserContactsInfoTitles } from 'src/app/user/components/user-profile/constants/user-contacts-info-titles';
import {
  EducationFormModalComponent,
  IUserEducationFormData,
} from 'src/app/user/components/user-profile/user-edit/education-form-modal/education-form-modal.component';
import { selectUserEducation } from 'src/app/user/components/user-profile/user-education-contacts/state/selectors';
import { userEducationActions } from 'src/app/user/components/user-profile/user-education-contacts/state/actions';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: [
    '../user-profile.component.scss',
    './user-education-contacts.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent extends AbstractUserProfileComponent {
  userData$ = this.store.select(selectUser);
  clipboardRegistry = clipboardEducationContactsRegistry;
  userEducation$ = this.store.select(selectUserEducation);

  onEditContacts(): void {
    this.setModal<TextInputFormModalComponent, textInputFormModalData>(
      TextInputFormModalComponent,
      this.userData$.pipe(
        map((user) => ({
          titles: UserContactsInfoTitles,
          formData: { city: user?.city, address: user?.address },
          header: 'Edit Address',
          style: 'single-column',
        })),
      ),
    )
      .afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((data) => data),
      )
      .subscribe((data) => {
        this.store.dispatch(userProfileActions.updateUser({ user: data }));
      });
  }

  onEditEducation(id: number | null = null): void {
    const educationDataToEdit = this.userEducation$.pipe(
      map((educationInfo) => {
        const formData = id
          ? educationInfo.find((educationItem) => educationItem.id === id)
          : null;
        return { formData } as IUserEducationFormData;
      }),
    );
    this.setModal<EducationFormModalComponent, IUserEducationFormData>(
      EducationFormModalComponent,
      educationDataToEdit,
    )
      .afterClosed()
      .pipe(
        takeUntil(this.destroyed$),
        filter((editedData) => editedData),
      )
      .subscribe((editedData) => {
        if (id) {
          //  dispatch PATCH
        } else {
          this.store.dispatch(
            userEducationActions.addUserEducationItem({
              educationItem: editedData,
            }),
          );
        }
      });
  }

  onDeleteEducation(id: number): void {
    this.store.dispatch(
      userEducationActions.removeEducationItem({ educationId: id }),
    );
  }
}
