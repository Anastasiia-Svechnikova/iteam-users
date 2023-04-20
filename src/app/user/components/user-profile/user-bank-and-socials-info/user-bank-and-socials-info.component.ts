import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, take } from 'rxjs';

import { IUserSocialLinksData } from 'src/app/shared/interfaces/user-social-links-data';
import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';
import { EditBankInfoModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-bank-info-modal/edit-bank-info-modal.component';
import { EditSocialsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-socials-modal/edit-socials-modal.component';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
import { editDialogOptions } from 'src/app/user/components/user-profile/constants/edit-dialog-options';
import { clipboardBankSocialsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-bank-socials-registy';

@Component({
  selector: 'app-user-bank-and-socials-info',
  templateUrl: './user-bank-and-socials-info.component.html',
  styleUrls: [
    './user-bank-and-socials-info.component.scss',
    '../user-profile.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBankAndSocialsInfoComponent {
  userBankData$ = this._userStore.userBankInfo$;
  userSocialsData$ = this._userStore.userSocialsInfo$;

  userBankInfoTitles = userBankInfoTitles;
  UserSocialLinksTitles = UserSocialLinksTitles;
  clipboardRegistry = clipboardBankSocialsRegistry;

  isUserBankDataEmpty$ = this.checkDataEmpty(this.userBankData$);
  isSocialsDataEmpty$ = this.checkDataEmpty(this.userSocialsData$);

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
    public clipboardService: ClipboardService,
  ) {}

  onEditSocials(): void {
    this.setDialog<EditBankInfoModalComponent>('socials');
  }

  onEditBankInfo(): void {
    this.setDialog<EditSocialsModalComponent>('bank');
  }

  setDialog<T>(section: 'bank' | 'socials'): void {
    const modalComponent =
      section === 'bank'
        ? EditBankInfoModalComponent
        : EditSocialsModalComponent;
    const dialogRef = this.dialog.open(modalComponent as ComponentType<T>, {
      ...editDialogOptions,
      data: section === 'bank' ? this.userBankData$ : this.userSocialsData$,
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

  checkDataEmpty(
    data$: Observable<IUserBankInvoiceData | IUserSocialLinksData>,
  ): Observable<boolean> {
    return data$.pipe(
      map((data) => Object.values(data).every((value) => !value)),
    );
  }
}
