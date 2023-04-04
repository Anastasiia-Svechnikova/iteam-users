import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import { ILoggedUser } from '../models/user';
import {
  login,
  loginFail,
  loginSuccess,
  register,
  registerFail,
  registerSuccess,
} from './actions';

export interface IAuthState {
  user: ILoggedUser;
  isRequesting: boolean;
}

const initialState: IAuthState = {
  user: {
    id: 0,
    roles: [],
    name: '',
    surname: '',
  },
  isRequesting: false,
};

export const AuthReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    isRequesting: true,
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isRequesting: false,
  })),
  on(loginFail, (state) => ({
    ...state,
    isRequesting: false,
  })),
  on(register, (state) => ({
    ...state,
    isRequesting: true,
  })),
  on(registerSuccess, (state) => ({
    ...state,
    isRequesting: false,
  })),
  on(registerFail, (state) => ({
    ...state,
    isRequesting: false,
  })),
);

const selectAuthFeature = createFeatureSelector<IAuthState>('auth');
export const selectRequestingStatus = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.isRequesting,
);
export const selectUserRole = createSelector(
  selectAuthFeature,
  (state: IAuthState) => state.user.roles[0].id,
);
