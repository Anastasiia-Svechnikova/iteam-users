import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';

@Component({
  selector: 'app-user-work-info',
  templateUrl: './user-work-info.component.html',
  styleUrls: ['./user-work-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserWorkInfoComponent {
  @Input() user!: IUserDetails;
}
