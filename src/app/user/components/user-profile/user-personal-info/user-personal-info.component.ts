import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';
import { UserPersonalInfoStatusIcons } from 'src/app/user/components/user-profile/constants/user-personal-info-status-icons';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
import { clipboardPersonalInfoRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-personal-info-registry';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userData$ = this._userStore.userPersonalInfo$;
  statusIcons = UserPersonalInfoStatusIcons;

  clipboardRegistry = clipboardPersonalInfoRegistry;

  constructor(
    private readonly _userStore: UserStore,
    public clipboardService: ClipboardService,
  ) {}
}
