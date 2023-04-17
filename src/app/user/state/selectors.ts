import { createFeatureSelector, createSelector } from '@ngrx/store';

import { siteNavigationLinksData } from 'src/app/navigation/constants/constants';
import { UserRoles } from 'src/app/shared/constants/constants';
import { IMainState } from 'src/app/user/state/reducer';

export const selectUserFeature = createFeatureSelector<IMainState>('main');

export const selectUser = createSelector(
  selectUserFeature,
  (state: IMainState) => state.user,
);

export const selectSiteNavigationLinksDataByUserRole = createSelector(
  selectUserFeature,
  (state: IMainState) => {
    const userRoles = state.user?.roles.map((role) => role.value as UserRoles);
    return siteNavigationLinksData.map((link) => {
      if (link.restrictedAccessRoles) {
        const accessPermission = link.restrictedAccessRoles.some((role) =>
          userRoles?.includes(role),
        );
        return { ...link, accessPermission };
      }
      return { ...link, accessPermission: true };
    });
  },
);

export const selectUserHasRole = createSelector(
  selectUserFeature,
  (state: IMainState, props: string) => {
    return state.user?.roles?.some((role) => role.value === props) || false;
  },
);
