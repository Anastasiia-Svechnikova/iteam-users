import { props } from '@ngrx/store';
import { createActionGroup, emptyProps } from '@ngrx/store';

import { ICurrentUserStoreData } from 'src/app/user/state/reducer';

export const userActions = createActionGroup({
  source: 'Main',
  events: {
    'Load Current User': emptyProps(),
    'Loaded Current User': props<{ user: ICurrentUserStoreData }>(),
    'Loaded Error': emptyProps(),
  },
});
