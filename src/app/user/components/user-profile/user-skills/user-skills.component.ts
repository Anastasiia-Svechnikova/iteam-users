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
    map((user) => user?.skills?.split(' ')),
  );

  constructor(private readonly _userStore: UserStore) {
    super();
  }

  copyContent(): void {
    // const obj = {
    //   name: 'bill',
    //   surname: 'perry',
    //   age: 25,
    // };
    // const keys = Object.keys(obj);
    //   const str = keys.reduce((acc, key) => {
    //     return acc.concat(`${key}: ${obj[key]}\n`);
    //   }, '');
    //   this.clipboard.copy(str);
  }
}
