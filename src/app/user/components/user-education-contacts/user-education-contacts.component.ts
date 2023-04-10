import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCurrentUser } from 'src/app/main/state/selectors';
import { userBankInfoTitles } from '../../constants/bank-invoice-data';
import { UserSocialLinksTitles } from '../../constants/social-links';
import { UserProfileInfoSections } from '../../models.ts/user-profile-info-sections';
import {
  selectIsCurrentUserBankDataEmpty,
  selectIsCurrentUserLinksDataEmpty,
} from '../../state/selectors';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['./user-education-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  user$ = this.store.select(selectCurrentUser);
  isUserBankDataEmpty$ = this.store.select(selectIsCurrentUserBankDataEmpty);
  isCurrentUserLinksDataEmpty$ = this.store.select(
    selectIsCurrentUserLinksDataEmpty,
  );

  userProfileInfoSections = UserProfileInfoSections;
  userBankInfoTitles = userBankInfoTitles;

  socialLinksData = UserSocialLinksTitles;

  constructor(private store: Store) {}
}
