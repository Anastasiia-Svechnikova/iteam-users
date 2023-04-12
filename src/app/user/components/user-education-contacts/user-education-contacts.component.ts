import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserStore } from 'src/app/user/components/user/user.store';
import { userBankInfoTitles } from 'src/app/user/constants/user-bank-info-titles';
import { UserSocialLinksTitles } from 'src/app/user/constants/social-links';
import { MatDialog } from '@angular/material/dialog';
import { EditContactsModalComponent } from 'src/app/user/components/user-edit/edit-contacts/edit-contacts-modal.component';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: [
    './user-education-contacts.component.scss',
    '../user/user.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  user$ = this._userStore.vm$;

  userBankInfoTitles = userBankInfoTitles;
  socialLinksData = UserSocialLinksTitles;

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
  ) {}

  onEditContacts(): void {
    const dialogRef = this.dialog.open(EditContactsModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.user$.pipe(
        map(({ user }) => ({ city: user?.city, address: user?.address })),
      ),
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this._userStore.updateUserInfo(data);
        }
      });
  }
}
