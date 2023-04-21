import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable, takeUntil } from 'rxjs';

import { IUserSocialLinksData } from 'src/app/shared/interfaces/user-social-links-data';
import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';
import {
  ISingleLineInputsFormModalData,
  singleLineInputsFormModalComponent,
} from 'src/app/user/components/user-profile/user-edit/single-line-inputs-form-modal/single-line-inputs-form-modal.component';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';
import { clipboardBankSocialsRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-bank-socials-registy';
import {
  selectUserBankInfo,
  selectUserSocialsInfo,
} from 'src/app/user/components/user-profile/state/selectors';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { AbstractUserProfileComponent } from 'src/app/user/components/user-profile/abstract-user-profile-component';
import { userBankInfoValidationOptions } from 'src/app/user/components/user-profile/user-edit/constants/bank-validation-options';
import { userSocialsValidationOptions } from 'src/app/user/components/user-profile/user-edit/constants/socials-validation-options';

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
    this.setModal<
      singleLineInputsFormModalComponent,
      ISingleLineInputsFormModalData
    >(
      singleLineInputsFormModalComponent,
      this.userSocialsData$.pipe(
        map((userSocialsData) => ({
          titles: UserSocialLinksTitles,
          formData: userSocialsData,
          header: 'Edit Social Links',
          style: 'single-column',
          validationOptions: userSocialsValidationOptions,
        })),
      ),
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
    this.setModal<
      singleLineInputsFormModalComponent,
      ISingleLineInputsFormModalData
    >(
      singleLineInputsFormModalComponent,
      this.userBankData$.pipe(
        map((userBankData) => ({
          titles: userBankInfoTitles,
          formData: userBankData,
          header: 'Edit Bank Invoice Info',
          style: 'double-column',
          validationOptions: userBankInfoValidationOptions,
        })),
      ),
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
