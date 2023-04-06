import { createReducer, on } from '@ngrx/store';

import { IUser } from '../../shared/models/user';
import { loadUser } from './actions';

export interface IMainState {
  user: IUser | null;
  isAdmin: boolean;
}

const initialState: IMainState = {
  user: null,
  isAdmin: false,
};

export const MainReducer = createReducer(
  initialState,

  on(loadUser, (state, { user, isAdmin }) => ({
    ...state,
    user,
    isAdmin
  })),
);
