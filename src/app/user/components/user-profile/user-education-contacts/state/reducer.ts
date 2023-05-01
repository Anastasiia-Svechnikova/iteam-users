import { createReducer, on } from '@ngrx/store';

import { IUserEducationDetails } from 'src/app/shared/interfaces/user-education';
import { userProfileActions } from 'src/app/user/components/user-profile/state/actions';
import { userEducationActions } from 'src/app/user/components/user-profile/user-education-contacts/state/actions';

const initialState: IUserEducationDetails[] = [];

export const UserEducationReducer = createReducer(
  initialState,

  on(userProfileActions.loadedUser, (_, { user }) => user.educationInfo),

  on(
    userEducationActions.addedUserEducationItem,
    (state, { educationItem }) => [...state, educationItem],
  ),

  on(userEducationActions.removedEducationItem, (state, { educationId }) =>
    state.filter((item) => item.id !== educationId),
  ),
);
