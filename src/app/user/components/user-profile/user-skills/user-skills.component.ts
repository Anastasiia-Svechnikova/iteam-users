import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { selectUserSkills } from 'src/app/user/components/user-profile/state/selectors';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends UnSubscriberComponent {
  userSkills$ = this.store.select(selectUserSkills);

  constructor(private store: Store) {
    super();
  }
}
