import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from 'src/app/user/components/user/user.store';

import { UserPersonalInfoStatusIcons } from 'src/app/user/constants/user-personal-info-status-icons';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss', '../user/user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userVm$ = this._userStore.vm$;
  statusIconTypes = UserPersonalInfoStatusIcons;

  constructor(private readonly _userStore: UserStore) {}
}
