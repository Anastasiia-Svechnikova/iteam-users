import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';

import { UserPersonalInfoStatusIcons } from 'src/app/user/components/user-profile/constants/user-personal-info-status-icons';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userVm$ = this._userStore.user$;
  statusIconTypes = UserPersonalInfoStatusIcons;

  constructor(private readonly _userStore: UserStore) {}
}
