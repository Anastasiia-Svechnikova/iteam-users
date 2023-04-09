import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from './reducer';

export const selectMainFeature = createFeatureSelector<IMainState>('main');
export const selectCurrentUser = createSelector(
  selectMainFeature,
  (state: IMainState) => state.user,
);
