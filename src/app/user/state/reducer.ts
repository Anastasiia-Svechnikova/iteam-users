import { createReducer, on } from '@ngrx/store';

import { userActions } from './actions';

// so far the current user object in global store only contains user id
// if need it will be expanded
export interface ICurrentUserSoreData {
  id: number;
}

export interface IMainState {
  user: ICurrentUserSoreData | null;
}

const initialState: IMainState = {
  user: null,
};

export const UserReducer = createReducer(
  initialState,

  on(userActions.loadedCurrentUser, (state, { user }) => ({
    ...state,
    user: user,
  })),
);
