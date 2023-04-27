import { props } from '@ngrx/store';
import { createActionGroup } from '@ngrx/store';

import { ITechnology } from 'src/app/shared/interfaces/technology';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';

export const userProfileActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{ id: string }>(),
    'Loaded User': props<{ user: IUserDetails }>(),
    Error: props<{ error: string }>(),
    'Update User': props<{ user: IUpdateUserDTO }>(),
    'Updated User': props<{ user: IUserDetails }>(),
    'Assign Technology To User': props<{ technology: ITechnology }>(),
    'Assigned Technology To User': props<{ technology: ITechnology }>(),
    'Remove Technology From User': props<{ technologyId: string }>(),
    'Removed Technology From User': props<{ technologyId: string }>(),
  },
});
