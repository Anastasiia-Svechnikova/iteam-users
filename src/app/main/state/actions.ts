import { createAction, props } from '@ngrx/store';

import { IUser } from '../../shared/models/user';

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: IUser }>(),
);
