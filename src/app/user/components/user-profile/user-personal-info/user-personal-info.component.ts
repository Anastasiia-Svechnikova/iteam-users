import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserPersonalInfoStatusIcons } from 'src/app/user/components/user-profile/constants/user-personal-info-status-icons';
import { ClipboardService } from 'src/app/shared/services/clipboard/clipboard.service';
import { clipboardPersonalInfoRegistry } from 'src/app/user/components/user-profile/constants/clipboard-property-names-registries/clipboard-personal-info-registry';
import { selectUserPersonalInfo } from 'src/app/user/components/user-profile/state/selectors';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  userData$ = this.store.select(selectUserPersonalInfo);
  statusIcons = UserPersonalInfoStatusIcons;

  clipboardRegistry = clipboardPersonalInfoRegistry;

  constructor(
    private store: Store,
    public clipboardService: ClipboardService,
  ) {}
}
