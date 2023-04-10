import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-details-header',
  templateUrl: './user-details-header.component.html',
  styleUrls: ['./user-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsHeaderComponent {
  @Input() user!: IUser;
}
