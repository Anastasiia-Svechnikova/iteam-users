import { createReducer, on } from '@ngrx/store';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';

export interface IUserProfileState {
  user: IUserDetails | null;
  loading: boolean;
}

const initialState: IUserProfileState = {
  user: null,
  loading: false,
};

export const UserProfileReducer = createReducer(
  initialState,

  on(userProfileActions.loadUser, userProfileActions.updateUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(
    userProfileActions.loadedUser,
    userProfileActions.updatedUser,
    (_, { user }) => ({
      loading: false,
      user: user,
    }),
  ),
);
