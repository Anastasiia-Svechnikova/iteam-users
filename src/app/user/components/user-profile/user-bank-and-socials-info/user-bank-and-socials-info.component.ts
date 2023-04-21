// import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { map, Observable, takeUntil } from 'rxjs';

import { IUserSocialLinksData } from 'src/app/shared/interfaces/user-social-links-data';
import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';
import { EditBankInfoModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-bank-info-modal/edit-bank-info-modal.component';
import { EditSocialsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-socials-modal/edit-socials-modal.component';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';
// import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
// import { editDialogOptions } from 'src/app/user/components/user-profile/constants/edit-dialog-options';
import { clipboardBankSocialsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-bank-socials-registy';
// import { Store } from '@ngrx/store';
import {
  selectUserBankInfo,
  selectUserSocialsInfo,
} from 'src/app/user/components/user-profile/state/selectors';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';

@Component({
  selector: 'app-user-bank-and-socials-info',
  templateUrl: './user-bank-and-socials-info.component.html',
  styleUrls: [
    './user-bank-and-socials-info.component.scss',
    '../user-profile.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBankAndSocialsInfoComponent extends AbstractUserProfileComponent {
  userBankData$ = this.store.select(selectUserBankInfo);
  userSocialsData$ = this.store.select(selectUserSocialsInfo);

  userBankInfoTitles = userBankInfoTitles;
  UserSocialLinksTitles = UserSocialLinksTitles;
  clipboardRegistry = clipboardBankSocialsRegistry;

  isUserBankDataEmpty$ = this.checkDataEmpty(this.userBankData$);
  isSocialsDataEmpty$ = this.checkDataEmpty(this.userSocialsData$);

  constructor() {
    super();
  }

  onEditSocials(): void {
    this.setModal<EditSocialsModalComponent, IUpdateUserDTO>(
      EditSocialsModalComponent,
      this.userSocialsData$,
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }

  onEditBankInfo(): void {
    this.setModal<EditBankInfoModalComponent, IUpdateUserDTO>(
      EditBankInfoModalComponent,
      this.userBankData$,
    )
      .afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        if (data) {
          this.store.dispatch(userProfileActions.updateUser({ user: data }));
        }
      });
  }

  checkDataEmpty(
    data$: Observable<IUserBankInvoiceData | IUserSocialLinksData>,
  ): Observable<boolean> {
    return data$.pipe(
      map((data) => Object.values(data).every((value) => !value)),
    );
  }
}
