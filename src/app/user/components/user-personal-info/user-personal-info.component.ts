import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserPersonalInfoStatusIcons } from 'src/app/user/constants/user-personal-info-status-icons';
import { selectCurrentUserPersonalData } from 'src/app/user/state/selectors';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userPersonalInfo$ = this.store.select(selectCurrentUserPersonalData);
  statusIconTypes = UserPersonalInfoStatusIcons;

  constructor(private store: Store) {}
}
