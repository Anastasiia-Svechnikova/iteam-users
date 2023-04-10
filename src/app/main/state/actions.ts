import { props } from '@ngrx/store';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

import { createActionGroup, emptyProps } from '@ngrx/store';

export const mainUserActions = createActionGroup({
  source: 'Main',
  events: {
    'Load Current User': emptyProps(),
    'Loaded Current User': props<{ user: IUserDetails }>(),
    'Loaded Error': emptyProps(),
  },
});
