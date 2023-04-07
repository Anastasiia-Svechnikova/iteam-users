import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/main/state/selectors';
import { bankInvoiceData } from '../../constants/bank-invoice-data';
import { socialLinks } from '../../constants/social-links';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: ['./user-education-contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  user$ = this.store.select(selectCurrentUser);

  bankInvoiceDataMap = bankInvoiceData;
  bankInvoiceDataKeys = Array.from(this.bankInvoiceDataMap.keys());
  socialLinksData = socialLinks;

  constructor(private store: Store) {}
}
