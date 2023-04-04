import { createAction, props } from '@ngrx/store';

import { ILoggedUser } from '../models/user';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>(),
);
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: ILoggedUser }>(),
);
export const loginFail = createAction('[Auth] Login Fail');

export const register = createAction(
  '[Auth] Register',
  props<{ email: string; password: string }>(),
);
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFail = createAction('[Auth] Register Fail');
