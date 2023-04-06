import { createReducer, on } from '@ngrx/store';

import { IUser } from '../../shared/models/user';
import { loadUser } from './actions';

export interface IMainState {
  user: IUser | null;
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
);
