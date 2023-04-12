import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from './reducer';

export const selectUserFeature = createFeatureSelector<IMainState>('user');

export const selectUser = createSelector(
  selectUserFeature,
  (state: IMainState) => state.user,
);
