import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserStore } from 'src/app/user/components/user/user.store';
import { userBankInfoTitles } from 'src/app/user/constants/user-bank-info-titles';
import { UserSocialLinksTitles } from 'src/app/user/constants/social-links';

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
  userVm$ = this._userStore.vm$;

  userBankInfoTitles = userBankInfoTitles;
  socialLinksData = UserSocialLinksTitles;

  constructor(private readonly _userStore: UserStore) {}
}
