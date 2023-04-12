import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
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
  userVm$ = this._userStore.vm$;

  userBankInfoTitles = userBankInfoTitles;
  UserSocialLinksTitles = UserSocialLinksTitles;

  isUserBankDataEmpty$ = this.checkDataByPropertiesEmpty([
    ...this.userBankInfoTitles.keys(),
  ]);

  isSocialsDataEmpty$ = this.checkDataByPropertiesEmpty([
    ...this.UserSocialLinksTitles.keys(),
  ]);

  constructor(private readonly _userStore: UserStore) {}

  checkDataByPropertiesEmpty(properties: string[]): Observable<boolean> {
    return this.userVm$.pipe(
      map(({ user }) =>
        properties.every((key) => !user?.[key as keyof IUserDetails]),
      ),
    );
  }
}
