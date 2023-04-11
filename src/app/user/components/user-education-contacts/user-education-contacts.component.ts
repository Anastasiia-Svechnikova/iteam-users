import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUser } from 'src/app/user/state/selectors';
import { userBankInfoTitles } from '../../constants/bank-invoice-data';
import { UserSocialLinksTitles } from '../../constants/social-links';

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
  user$ = this.store.select(selectUser);

  userBankInfoTitles = userBankInfoTitles;

  socialLinksData = UserSocialLinksTitles;

  constructor(private store: Store) {}
}
