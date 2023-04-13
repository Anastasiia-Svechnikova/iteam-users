import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';

@Component({
  selector: 'app-user-work-info',
  templateUrl: './user-work-info.component.html',
  styleUrls: [
    './user-work-info.component.scss',
    '../user-profile.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWorkInfoComponent {
  userVm$ = this._userStore.user$;

  constructor(private readonly _userStore: UserStore) {}
}
