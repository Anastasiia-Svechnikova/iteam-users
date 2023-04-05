import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from './reducer';

const selectAuthFeature = createFeatureSelector<IAuthState>('auth');
export const selectRequestingStatus = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.isRequesting,
);
