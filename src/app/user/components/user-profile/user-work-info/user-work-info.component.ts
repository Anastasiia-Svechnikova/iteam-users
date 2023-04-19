import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';

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
  userData$ = this._userStore.user$.pipe(map((user) => user?.workHistory));

  constructor(
    private readonly _userStore: UserStore,
    public clipboardService: ClipboardService,
  ) {}
}
