import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IUser } from 'src/app/shared/models/user';
import { IndividualEntrepreneurData } from 'src/app/user-list/constants/individual-entrepreneur-data';

@Component({
  selector: 'app-user-details-card-info',
  templateUrl: './user-details-card-info.component.html',
  styleUrls: ['./user-details-card-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsCardInfoComponent {
  @Input() user!: IUser;
  individualEntrepreneurData = IndividualEntrepreneurData;
}
