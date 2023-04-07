import { ChangeDetectionStrategy, Component } from '@angular/core';

import { user } from './mock-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  user = user.user;
  skills = this.user.skills.split(' ');
}
