import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-user-personal-info',
  templateUrl: './user-personal-info.component.html',
  styleUrls: ['./user-personal-info.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPersonalInfoComponent {
  @Input() user!: IUserDetails;
}
