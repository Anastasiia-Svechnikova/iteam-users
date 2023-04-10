import { createSelector } from '@ngrx/store';

import { IMainState } from 'src/app/main/state/reducer';
import { selectMainFeature } from 'src/app/main/state/selectors';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';
import { userBankInfoTitles } from '../constants/bank-invoice-data';

export const selectCurrentUserSkills = createSelector(
  selectMainFeature,
  (state: IMainState) => state.user?.skills?.split(' '),
);

export const selectCurrentUserWorkHistory = createSelector(
  selectMainFeature,
  (state: IMainState) => state.user?.workHistory,
);

export const selectIsCurrentUserBankDataEmpty = createSelector(
  selectMainFeature,
  (state: IMainState) => {
    return Array.from(userBankInfoTitles.keys()).every((title) => {
      if (state.user) {
        return !state.user[title];
      } else {
        return true;
      }
    });
  },
);

export const selectIsCurrentUserLinksDataEmpty = createSelector(
  selectMainFeature,
  () => true,
);

export const UserInterfacePropertiesBySection = new Map<string, string[]>([
  ['education', ['education']],
  ['skills', ['skills']],
  [
    'personalDetails',
    ['name', 'surname', 'email', 'birthday', 'phone', 'status'],
  ],
  ['description', ['description']],
  ['workHistory', ['workHistory']],
  ['portfolio', ['portfolio']],
  ['address', ['city', 'address']],
  ['socials', ['github', 'linkedin', 'telegramTag', 'upwork']],
  [
    'invoiceDetails',
    [
      'individualEntrepreneurName',
      'individualEntrepreneurAddress',
      'individualEntrepreneurIndividualTaxNumber',
      'individualEntrepreneurBankAccounNumber',
      'individualEntrepreneurBankName',
      'individualEntrepreneurBankCode',
      'individualEntrepreneurBeneficiaryBank',
      'individualEntrepreneurSwiftCode',
    ],
  ],
]);

export const selectUserInfoBySection = <T, U>(
  section: UserProfileInfoSections,
): ((state: object) => U) => {
  return createSelector(selectMainFeature, (state: IMainState) => {
    const selectedUserInterfaceProperties =
      UserInterfacePropertiesBySection.get(section);
    const data: { [key: string]: T } = {};
    selectedUserInterfaceProperties.forEach(
      (item) => (data[item] = state?.user[item as keyof IUserDetails] as T),
    );
    return data as U;
  });
};
