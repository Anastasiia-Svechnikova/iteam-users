import { createAction, props } from '@ngrx/store';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: IUserDetails }>(),
);
