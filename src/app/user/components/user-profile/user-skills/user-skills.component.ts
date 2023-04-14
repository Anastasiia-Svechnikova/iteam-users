import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends UnSubscriberComponent {
  userSkills$ = this._userStore.user$.pipe(
    map((user) => {
      return user?.skills?.split(' ') || [];
    }),
  );

  constructor(private readonly _userStore: UserStore) {
    super();
  }
}
