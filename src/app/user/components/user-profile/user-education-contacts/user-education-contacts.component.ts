import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, takeUntil } from 'rxjs';

import { clipboardEducationContactsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-education-contacts-registry';
import { selectUser } from 'src/app/user/components/user-profile/state/selectors';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import {
  textInputFormModalData,
  TextInputFormModalComponent,
} from 'src/app/user/components/user-profile/user-edit/text-input-form-modal/text-input-form-modal.component';
import { UserContactsInfoTitles } from 'src/app/user/components/user-profile/constants/user-contacts-info-titles';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent extends AbstractUserProfileComponent {
  userData$ = this.store.select(selectUser);
  clipboardRegistry = clipboardEducationContactsRegistry;

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
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }
}
