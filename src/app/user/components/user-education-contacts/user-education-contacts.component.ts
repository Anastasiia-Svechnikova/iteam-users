import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUserDetails } from 'src/app/shared/interfaces/user-details';
import { bankInvoiceData } from '../../constants/bank-invoice-data';
import { socialLinks } from '../../constants/social-links';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['./user-education-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  @Input() user!: IUserDetails;
  bankInvoiceDataMap = bankInvoiceData;
  bankInvoiceDataKeys = Array.from(this.bankInvoiceDataMap.keys());
  socialLinksData = socialLinks;
}
