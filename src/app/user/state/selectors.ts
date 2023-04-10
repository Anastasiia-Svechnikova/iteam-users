import { createSelector } from '@ngrx/store';

import { IMainState } from 'src/app/main/state/reducer';
import { selectMainFeature } from 'src/app/main/state/selectors';

export const selectCurrentUserSkills = createSelector(
  selectMainFeature,
  (state: IMainState) => state.user?.skills?.split(' '),
);

export const selectCurrentUserWorkHistory = createSelector(
  selectMainFeature,
  (state: IMainState) => state.user?.workHistory,
);

export const selectCurrentUserPersonalData = createSelector(
  selectMainFeature,
  (state: IMainState) => ({
    name: state.user?.name,
    surname: state.user?.surname,
    email: state.user?.email,
    phone: state.user?.phone,
    status: state.user?.status,
    birthday: state.user?.birthday,
    startDate: state.user?.startDate,
    endDate: state.user?.endDate,
    endReason: state.user?.endReason,
  }),
);

export const selectCurrentUserBankInvoiceData = createSelector(
  selectMainFeature,
  (state: IMainState) => ({
    individualEntrepreneurName: state.user?.individualEntrepreneurName,
    individualEntrepreneurAddress: state.user?.individualEntrepreneurAddress,
    individualEntrepreneurIndividualTaxNumber:
      state.user?.individualEntrepreneurIndividualTaxNumber,
    individualEntrepreneurBankAccounNumber:
      state.user?.individualEntrepreneurBankAccounNumber,
    individualEntrepreneurBankName: state.user?.individualEntrepreneurBankName,
    individualEntrepreneurBankCode: state.user?.individualEntrepreneurBankCode,
    individualEntrepreneurBeneficiaryBank:
      state.user?.individualEntrepreneurBeneficiaryBank,
    individualEntrepreneurSwiftCode:
      state.user?.individualEntrepreneurSwiftCode,
  }),
);

export const selectCurrentUserSocialsData = createSelector(
  selectMainFeature,
  (state: IMainState) => ({
    github: state.user?.github,
    linkedin: state.user?.linkedin,
    telegramTag: state.user?.telegramTag,
    upwork: state.user?.upwork,
  }),
);
