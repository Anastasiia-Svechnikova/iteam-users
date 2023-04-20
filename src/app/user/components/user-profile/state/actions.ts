import { props } from '@ngrx/store';
import { createActionGroup } from '@ngrx/store';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { IUpdateUserDTO } from 'src/app/user/components/user-profile/interfaces/update-user-dto';

export const userProfileActions = createActionGroup({
  source: 'Main',
  events: {
    'Load User': props<{ id: string }>(),
    'Loaded User': props<{ user: IUserDetails }>(),
    'Loaded Error': props<{ error: string }>(),
    'Update User': props<{ user: IUpdateUserDTO }>(),
    'Updated User': props<{ user: IUserDetails }>(),
  },
});
