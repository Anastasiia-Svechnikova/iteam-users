import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMainState } from './reducer';

const selectFeature = createFeatureSelector<IMainState>('main');
export const selectCurrentUser = createSelector(
  selectFeature,
  (state: IMainState) => state.user,
);
