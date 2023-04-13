import { ComponentType } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, take } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { EditBankInfoModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-bank-info-modal/edit-bank-info-modal.component';
import { EditSocialsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-socials-modal/edit-socials-modal.component';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';

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
  user$ = this._userStore.user$;

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
    this.setDialog('socials');
  }

  onEditBankInfo(): void {
    this.setDialog('bank');
  }

  setDialog<T>(section: 'bank' | 'socials'): void {
    const modalComponent =
      section === 'bank'
        ? EditBankInfoModalComponent
        : EditSocialsModalComponent;
    const dataSet =
      section === 'bank' ? userBankInfoTitles : UserSocialLinksTitles;

    const dialogRef = this.dialog.open(modalComponent as ComponentType<T>, {
      restoreFocus: false,
      autoFocus: false,
      data: this.user$.pipe(
        map((user) => {
          const result: { [key: string]: string | number | undefined | null } =
            {};
          [...dataSet.keys()].forEach((key) => (result[key] = user?.[key]));
          return result;
        }),
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
      map((user) =>
        properties.every((key) => !user?.[key as keyof IUserDetails]),
      ),
    );
  }
}
