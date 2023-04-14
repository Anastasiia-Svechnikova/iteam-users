import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';

import { UserPersonalInfoStatusIcons } from 'src/app/user/components/user-profile/constants/user-personal-info-status-icons';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userData$ = this._userStore.user$.pipe(
    map((user) => ({
      name: user?.name,
      surname: user?.surname,
      status: user?.status,
      birthday: user?.birthday,
      email: user?.email,
      startDate: user?.startDate,
      endDate: user?.endDate,
      endReason: user?.endReason,
      phone: user?.phone,
    })),
  );

  statusIcons = UserPersonalInfoStatusIcons;

  constructor(private readonly _userStore: UserStore) {}
}
