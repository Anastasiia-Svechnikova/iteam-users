import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { userBankInfoTitles } from 'src/app/user/constants/bank-invoice-data';
import { UserSocialLinksTitles } from 'src/app/user/constants/social-links';
import {
  selectCurrentUserBankInvoiceData,
  selectCurrentUserSocialsData,
} from 'src/app/user/state/selectors';

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
  userBankData$ = this.store.select(selectCurrentUserBankInvoiceData);
  userSocialsData$ = this.store.select(selectCurrentUserSocialsData);

  isUserBankDataEmpty$ = this.userBankData$.pipe(
    map((data) => !Object.values(data).length),
  );
  isUserSocialsDataEmpty$ = this.userSocialsData$.pipe(
    map((data) => !Object.values(data).length),
  );

  userBankInfoTitles = userBankInfoTitles;
  socialLinksData = UserSocialLinksTitles;

  constructor(private store: Store) {}
}
