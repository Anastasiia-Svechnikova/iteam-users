import { createReducer, on } from '@ngrx/store';

import { ITechnology } from 'src/app/shared/interfaces/technology';
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

  on(
    userProfileActions.loadUser,
    userProfileActions.updateUser,
    userProfileActions.assignTechnologyToUser,
    userProfileActions.removeTechnologyFromUser,
    (state) => ({
      ...state,
      loading: true,
    }),
  ),

  on(
    userProfileActions.loadedUser,
    userProfileActions.updatedUser,
    (_, { user }) => ({
      loading: false,
      user: user,
    }),
  ),
  on(userProfileActions.error, (state) => ({
    ...state,
    loading: false,
  })),

  on(userProfileActions.assignedTechnologyToUser, (state, { technology }) => {
    if (state.user) {
      const techStack = [...state.user.techStack, technology];
      return { loading: false, user: { ...state.user, techStack } };
    }
    return { ...state, loading: false };
  }),

  on(
    userProfileActions.assignedTechnologiesToUser,
    (state, { technologies }) => {
      if (state.user) {
        const techStack = [...state.user.techStack, ...technologies];
        return { loading: false, user: { ...state.user, techStack } };
      }
      return { ...state, loading: false };
    },
  ),

  on(
    userProfileActions.removedTechnologyFromUser,
    (state, { technologyId }) => {
      if (state.user) {
        const techStack = state.user.techStack.filter(
          (technology: ITechnology) => technology.id !== Number(technologyId),
        );
        return {
          loading: false,
          user: { ...state.user, techStack },
        };
      }
      return { ...state, loading: false };
    },
  ),
);
