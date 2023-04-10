import { createSelector } from '@ngrx/store';

import { IMainState } from 'src/app/main/state/reducer';
import { selectMainFeature } from 'src/app/main/state/selectors';
import { userBankInfoTitles } from '../constants/bank-invoice-data';
import { socialLinks } from '../constants/social-links';

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
  (state: IMainState) =>
    socialLinks.every((link) => {
      if (state.user) {
        return !state.user[link];
      } else {
        return true;
      }
    }),
);
