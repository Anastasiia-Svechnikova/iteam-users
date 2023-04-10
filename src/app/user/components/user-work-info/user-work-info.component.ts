import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserProfileInfoSections } from '../../models.ts/user-profile-info-sections';
import { selectCurrentUserWorkHistory } from '../../state/selectors';

@Component({
  selector: 'app-user-work-info',
  templateUrl: './user-work-info.component.html',
  styleUrls: ['./user-work-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWorkInfoComponent {
  userWorkHistory$ = this.store.select(selectCurrentUserWorkHistory);
  sectionTypes = UserProfileInfoSections;

  constructor(private store: Store) {}
}
