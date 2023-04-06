import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from './reducer';

const selectAuthFeature = createFeatureSelector<IMainState>('main');

export const selectUser = createSelector(
  selectAuthFeature,
  (state: IMainState) => state.user,
);
