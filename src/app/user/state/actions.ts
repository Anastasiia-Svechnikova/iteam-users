import { props } from '@ngrx/store';

import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { createActionGroup, emptyProps } from '@ngrx/store';

export const userActions = createActionGroup({
  source: 'Main',
  events: {
    'Load User By Id': props<{ id: string }>(),
    'Loaded User': props<{ user: IUserDetails }>(),
    'Loaded Error': emptyProps(),
  },
});
