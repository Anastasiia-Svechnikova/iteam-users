import { createReducer, on } from '@ngrx/store';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

import { loadUser, mainUserActions } from './actions';

export interface IMainState {
  user: IUserDetails | null;
}

const initialState: IMainState = {
  user: null,
};

export const MainReducer = createReducer(
  initialState,

  on(loadUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
  on(mainUserActions.loadedCurrentUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
);
