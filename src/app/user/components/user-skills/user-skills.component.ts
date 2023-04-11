import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCurrentUserSkills } from 'src/app/user/state/selectors';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user/user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent {
  skills$ = this.store.select(selectCurrentUserSkills);

  constructor(private store: Store) {}
}
