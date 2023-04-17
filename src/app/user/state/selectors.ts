import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from 'src/app/user/state/reducer';

export const selectUserFeature = createFeatureSelector<IMainState>('main');

export const selectUser = createSelector(
  selectUserFeature,
  (state: IMainState) => state.user,
);
