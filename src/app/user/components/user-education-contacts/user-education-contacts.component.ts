import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { userDetailsIconIndexedType } from 'src/app/shared/constants/constants';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['./user-education-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  @Input() user!: IUserDetails;
  socialLinks: userDetailsIconIndexedType[] = [
    'upwork',
    'github',
    'linkedin',
    'telegramTag',
  ];
}
