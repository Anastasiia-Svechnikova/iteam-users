import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { EditContactsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-contacts/edit-contacts-modal.component';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
import { clipboardEducationContactsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-education-contacts-registry';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/user/components/user-profile/state/selectors';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  userData$ = this.store.select(selectUser);
  clipboardRegistry = clipboardEducationContactsRegistry;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    public clipboardService: ClipboardService,
  ) {}

  onEditContacts(): void {
    const dialogRef = this.dialog.open(EditContactsModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.userData$.pipe(
        map((user) => ({ address: user?.address, city: user?.city })),
      ),
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }
}
