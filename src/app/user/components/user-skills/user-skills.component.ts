import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';

import { UnSubscriberComponent } from 'src/app/shared/classes/unsubscriber';
import { UserStore } from 'src/app/user/components/user/user.store';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss', '../user/user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSkillsComponent extends UnSubscriberComponent {
  userSkills$ = this._userStore.vm$.pipe(
    map(({ user }) => user?.skills?.split(' ')),
  );

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
  ) {
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
