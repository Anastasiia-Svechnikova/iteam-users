import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './actions';

export interface IAuthState {
  isRequesting: boolean;
}

const initialState: IAuthState = {
  isRequesting: false,
};

export const AuthReducer = createReducer(
  initialState,

  on(AuthActions.login, (state) => ({
    ...state,
    isRequesting: true,
  })),

  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    isRequesting: false,
  })),

  on(AuthActions.loginFail, (state) => ({
    ...state,
    isRequesting: false,
  })),

  on(AuthActions.register, (state) => ({
    ...state,
    isRequesting: true,
  })),

  on(AuthActions.registerSuccess, (state) => ({
    ...state,
    isRequesting: false,
  })),

  on(AuthActions.registerFail, (state) => ({
    ...state,
    isRequesting: false,
  })),
);
