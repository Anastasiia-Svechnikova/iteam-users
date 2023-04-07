import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from './reducer';

const selectAuthFeature = createFeatureSelector<IMainState>('main');

export const selectUser = createSelector(
  selectAuthFeature,
  (state: IMainState) => state.user,
);

export const selectUserHasRole = createSelector(
  selectAuthFeature,
  (state: IMainState, props: string) => {
    return state.user?.roles?.some((role) => role.value === props) || false;
  },
);
