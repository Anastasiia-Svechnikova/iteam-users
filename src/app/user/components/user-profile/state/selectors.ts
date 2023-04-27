import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITechnology } from 'src/app/shared/interfaces/technology';

import { IUserBankInvoiceData } from 'src/app/shared/interfaces/user-bank-invoice-data';
import { IUserPersonalData } from 'src/app/shared/interfaces/user-personal-info-data';
import { IUserSocialLinksData } from 'src/app/shared/interfaces/user-social-links-data';
import { IUserProfileState } from 'src/app/user/components/user-profile/state/reducer';

export const selectUserProfileFeature =
  createFeatureSelector<IUserProfileState>('user-profile');

export const selectUser = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => state.user,
);

export const selectLoading = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => state.loading,
);

export const selectUserId = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => String(state.user?.id),
);

export const selectUserWorkInfo = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => state.user?.workHistory,
);

export const selectUserEducation = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => state.user?.educationInfo,
);

export const selectUserSkills = createSelector(
  selectUserProfileFeature,
  (state: IUserProfileState) => ({
    techStack: state.user?.techStack as ITechnology[],
  }),
);

export const selectUserBankInfo = createSelector(
  selectUserProfileFeature,
  ({ user }) =>
    ({
      individualEntrepreneurName: user?.individualEntrepreneurName,
      individualEntrepreneurAddress: user?.individualEntrepreneurAddress,
      individualEntrepreneurIndividualTaxNumber:
        user?.individualEntrepreneurIndividualTaxNumber,
      individualEntrepreneurBankAccounNumber:
        user?.individualEntrepreneurBankAccounNumber,
      individualEntrepreneurBankName: user?.individualEntrepreneurBankName,
      individualEntrepreneurBankCode: user?.individualEntrepreneurBankCode,
      individualEntrepreneurBeneficiaryBank:
        user?.individualEntrepreneurBeneficiaryBank,
      individualEntrepreneurSwiftCode: user?.individualEntrepreneurSwiftCode,
    } as IUserBankInvoiceData),
);

export const selectUserSocialsInfo = createSelector(
  selectUserProfileFeature,
  ({ user }) =>
    ({
      upwork: user?.upwork,
      github: user?.github,
      linkedin: user?.linkedin,
      telegramTag: user?.telegramTag,
    } as IUserSocialLinksData),
);

export const selectUserPersonalInfo = createSelector(
  selectUserProfileFeature,
  ({ user }) =>
    ({
      name: user?.name,
      surname: user?.surname,
      status: user?.status,
      birthday: user?.birthday,
      email: user?.email,
      startDate: user?.startDate,
      endDate: user?.endDate,
      endReason: user?.endReason,
      phone: user?.phone,

      avatarUrl: user?.avatarUrl,
    } as IUserPersonalData),
);
