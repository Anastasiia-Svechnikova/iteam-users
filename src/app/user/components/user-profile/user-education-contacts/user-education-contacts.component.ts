import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';
import { EditContactsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-contacts/edit-contacts-modal.component';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  userEducationData$ = this._userStore.user$.pipe(
    map((user) => ({
      educationInfo: user?.educationInfo,
    })),
  );
  userContactsData$ = this._userStore.user$.pipe(
    map((user) => ({
      address: user?.address,
      city: user?.city,
    })),
  );

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
    public clipboardService: ClipboardService,
  ) {}

  onEditContacts(): void {
    const dialogRef = this.dialog.open(EditContactsModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.userContactsData$,
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
