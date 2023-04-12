import { createReducer, on } from '@ngrx/store';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { userActions } from './actions';

export interface IMainState {
  user: IUserDetails | null;
}

const initialState: IMainState = {
  user: null
};

export const UserReducer = createReducer(
  initialState,

  on(userActions.loadedUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
);
