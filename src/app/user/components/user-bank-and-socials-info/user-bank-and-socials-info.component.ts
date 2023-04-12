import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, take } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { EditSocialsModalComponent } from 'src/app/user/components/user-edit/edit-socials-modal/edit-socials-modal.component';
import { UserStore } from 'src/app/user/components/user/user.store';
import { UserSocialLinksTitles } from 'src/app/user/constants/social-links';
import { userBankInfoTitles } from 'src/app/user/constants/user-bank-info-titles';

@Component({
  selector: 'app-user-bank-and-socials-info',
  templateUrl: './user-bank-and-socials-info.component.html',
  styleUrls: [
    './user-bank-and-socials-info.component.scss',
    '../user/user.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBankAndSocialsInfoComponent {
  user$ = this._userStore.vm$;

  userBankInfoTitles = userBankInfoTitles;
  UserSocialLinksTitles = UserSocialLinksTitles;

  isUserBankDataEmpty$ = this.checkDataByPropertiesEmpty([
    ...this.userBankInfoTitles.keys(),
  ]);

  isSocialsDataEmpty$ = this.checkDataByPropertiesEmpty([
    ...this.UserSocialLinksTitles.keys(),
  ]);

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
  ) {}

  onEditSocials(): void {
    const dialogRef = this.dialog.open(EditSocialsModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.user$.pipe(
        map(({ user }) => ({
          github: user?.github,
          linkedin: user?.linkedin,
          upwork: user?.upwork,
          telegramTag: user?.telegramTag,
        })),
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

  checkDataByPropertiesEmpty(properties: string[]): Observable<boolean> {
    return this.user$.pipe(
      map(({ user }) =>
        properties.every((key) => !user?.[key as keyof IUserDetails]),
      ),
    );
  }
}
