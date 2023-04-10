import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCurrentUser } from 'src/app/main/state/selectors';
import { UserPersonalInfoStatusIcons } from 'src/app/user/constants/user-personal-info-status-icons';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  user$ = this.store.select(selectCurrentUser);

  sectionTypes = UserProfileInfoSections;
  statusIconTypes = UserPersonalInfoStatusIcons;

  constructor(private store: Store) {}
}
